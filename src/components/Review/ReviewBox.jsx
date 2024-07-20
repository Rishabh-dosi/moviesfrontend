import React, { useState } from 'react';
import ReviewModal from './ReviewModal';

const ReviewBox = (movieId) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex justify-center items-center mt-4">
            <button
                onClick={openModal}
                className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-300"
            >
                Add Review
            </button>
            {isModalOpen && <ReviewModal onClose={closeModal} movieId={movieId} />}
        </div>
    );
};

export default ReviewBox;
