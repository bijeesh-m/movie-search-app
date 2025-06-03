import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_URL = "https://www.omdbapi.com/?apikey=c6466158"; // Replace with your real API key

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const searchMovies = async (title) => {
        try {
            const response = await axios.get(`${API_URL}&s=${title}`);
            if (response.data.Search) {
                setMovies(response.data.Search);
            } else {
                setMovies([]);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching movies:", error);
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
        setIsLoading(true);
        if (searchTerm.trim()) {
            searchMovies(searchTerm);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Movie Search</h1>

            <form onSubmit={handleSearch} className="flex justify-center mb-6">
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
                {movies.length > 0 ? (
                    movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
                ) : searchTerm ? (
                    <p className="text-center text-gray-600 col-span-full">No movies found</p>
                ) : (
                    <div className=" text-center col-span-full">Search movies by title</div>
                )}
            </div>
        </div>
    );
};

export default Movies;
