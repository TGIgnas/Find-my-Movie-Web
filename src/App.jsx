import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import MovieList from "./components/MovieList";
import PaginationComponent from "./components/PaginationComponent";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async (query = "", page = 1) => {
      setLoading(true);
      setErrorMessage("");
      try {
        const endpoint = query
          ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
              query
            )}&page=${page}`
          : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&page=${page}`;
        const response = await fetch(endpoint, API_OPTIONS);
        if (!response.ok) throw new Error("Failed to fetch movies");

        const data = await response.json();
        if (!data.results || data.results.length === 0) {
          setErrorMessage("No movies found.");
          setMovieList([]);
          return;
        }
        setMovieList(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(`Error fetching movies: ${error}`);
        setErrorMessage("Error fetching movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies(query, currentPage);
  }, [query, currentPage]);
  return (
    <main className="min-h-screen bg-primary">
      <div className="px-5 py-12 xs:p-10 max-w-7xl mx-auto flex flex-col relative z-10">
        <Header
          onSearch={(searchTerm) => {
            setQuery(searchTerm);
            setCurrentPage(1);
          }}
        />
        <section className="space-y-9 mt-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            All Movies
          </h2>
          {loading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500 bg-red-100 p-3 rounded-md">
              {errorMessage}
            </p>
          ) : (
            <>
              <MovieList movieList={movieList} />
              <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
