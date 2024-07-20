import React, { useEffect, useState } from 'react';
import { getOneMovie } from '../../api';

const ReviewModal = ({ onClose, movieId }) => {
    const [reviewContent, setReviewContent] = useState('');
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getOneMovie(movieId);
                setReviews(response);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };
        fetchData();

    }, [movieId])

    const handleSubmit = (event) => {
        event.preventDefault();

        // Handle review submission here
        console.log(reviewContent);
        onClose();
        setReviewContent('')
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl mb-4">Add Your Review </h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        rows="5"
                        placeholder="Write your review here..."
                    />
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-300 text-black font-semibold rounded hover:bg-gray-400 transition duration-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {reviews}
            </div>
        </div>
    );
};

export default ReviewModal;
