import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm">
            <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} className="w-full h-80 object-cover" />
            </Link>
            <div className="p-4">
                <h2 className="text-xl font-semibold">{movie.Title}</h2>
                <p className="text-gray-600 text-sm">{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieCard;
