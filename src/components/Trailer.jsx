import React from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

function Trailer() {
    const { TrailerId } = useParams();
    console.log(`https://www.youtube.com/watch?v=${TrailerId}`);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 text-white">
            
            <div className="w-full max-w-4xl aspect-w-16 lg:h-[500px] h-[300px]">
                <ReactPlayer
                    controls
                    url={`https://www.youtube.com/watch?v=${TrailerId}`}
                    width="100%"
                    height="100%"
                />
            </div>
            <Link
                to="/"
                className="mb-4 p-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition duration-300 mt-4"
            >
                Back
            </Link>
        </div>
    );
}

export default Trailer;
