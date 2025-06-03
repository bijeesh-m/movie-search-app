import axios from "axios";
import { useEffect, useState } from "react";

const MovieDetails = ({ movie }) => {
    return (
        <div className=" w-full bg-white rounded-lg shadow-lg p-6 md:p-20">
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full   md:w-1/3 rounded-lg object-cover"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {movie.Title} ({movie.Year})
                    </h1>
                    <p className="text-gray-600 italic mb-4">{movie.Plot}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="text-sm text-gray-500">Genre</p>
                            <p className="text-base font-medium text-gray-800">{movie.Genre}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Rated</p>
                            <p className="text-base font-medium text-gray-800">{movie.Rated}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Released</p>
                            <p className="text-base font-medium text-gray-800">{movie.Released}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Runtime</p>
                            <p className="text-base font-medium text-gray-800">{movie.Runtime}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Director</p>
                            <p className="text-base font-medium text-gray-800">{movie.Director}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Writers</p>
                            <p className="text-base font-medium text-gray-800">{movie.Writer}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Actors</p>
                            <p className="text-base font-medium text-gray-800">{movie.Actors}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Language</p>
                            <p className="text-base font-medium text-gray-800">{movie.Language}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Country</p>
                            <p className="text-base font-medium text-gray-800">{movie.Country}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Box Office</p>
                            <p className="text-base font-medium text-gray-800">{movie.BoxOffice}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Awards</p>
                            <p className="text-base font-medium text-gray-800">{movie.Awards}</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Ratings</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {movie?.Ratings?.map((rating, index) => (
                                <div key={index} className="bg-gray-50 p-3 rounded-md text-center shadow-sm">
                                    <p className="text-sm text-gray-500">{rating.Source}</p>
                                    <p className="text-lg font-bold text-gray-800">{rating.Value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
