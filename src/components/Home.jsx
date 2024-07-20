import React, { useEffect, useState } from "react";
import { getMovies } from "../api";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReviewBox from "./Review/ReviewBox";

function Home() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    const handlePlayTrailer = (trailerLink) => {
        // Extract the video ID from the trailerLink
        const videoId = trailerLink.includes("watch?v=")
            ? trailerLink.substring(trailerLink.indexOf("watch?v=") + 8)
            : trailerLink.substring(trailerLink.lastIndexOf("/") + 1);

        navigate(`/trailer/${videoId}`);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await getMovies();
                setMovies(response);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="w-[90vw]">
                <Carousel>
                    {movies.map((movie) => (
                        <Paper key={movie.id} className="p-4 bg-white shadow-lg rounded-lg">
                            <div className="lg:flex lg:items-center lg:justify-between overlay" style={{ backgroundImage: `url(${movie.backdrops[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="lg:block lg:w-1/3 lg:h-[81vh] lg:rounded-lg lg:overflow-hidden lg:p-2">
                                    <img src={movie.poster} alt={movie.title} className=" w-full h-[80vh] object-contain rounded-lg" />
                                </div>
                                <div className="flex flex-col justify-center lg:w-1/2 lg:ml-4">
                                    <h5 className="text-lg font-bold md:text-center lg:text-left text-white">{movie.title}</h5>
                                    <div className="flex gap-3 lg:justify-normal sm:justify-center">
                                        <button onClick={() => handlePlayTrailer(movie.trailerLink)} className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-300 self-center lg:self-start">
                                            Play Trailer
                                        </button>
                                        <ReviewBox movieId={ movie.imdbId } />
                                    </div>
                                </div>
                                {/* Show image on smaller screens */}
                            </div>
                        </Paper>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Home;
