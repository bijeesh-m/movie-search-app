import Header from "../components/Header";
import MovieDetails from "../components/MovieDetails";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviePage = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=c6466158`);
            console.log(response);
            setMovieData(response.data);
            setIsLoading(false);
        };
        fetchMovie();
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <MovieDetails movie={movieData} />
            <Footer />
        </div>
    );
};

export default MoviePage;
