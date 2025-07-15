import axios from "axios";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

const API_URL = "https://www.omdbapi.com/?apikey=<apikey>"; // Replace apikey with your real API key from omdb

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await axios.get(`${API_URL}&s=${title}`);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMessage("No movies found");
        setMovies([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMessage(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsLoading(true);
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Movie Search</h1>

      <form onSubmit={handleSearch} className="flex justify-center mb-6 ">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-80 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>

      <div className="  w-full  flex justify-center p-10 items-center">
        {movies.length === 0 && !message ? (
          <h1 className=" font-bold text-5xl text-center text-blue-900">
            Search Your favourite movies <br />
            and Explore
          </h1>
        ) : (
          movies.length === 0 && (
            <p className=" text-2xl text-red-600">{message}</p>
          )
        )}
      </div>
    </div>
  );
};

export default Movies;
