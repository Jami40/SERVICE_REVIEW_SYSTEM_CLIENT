import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [selectedReview, setSelectedReview] = useState(null)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    useEffect(() => {
        fetchReviews()
    }, [user])

    const fetchReviews = () => {
        axios.get(`http://localhost:5000/review/myRev?email=${user?.email}`)
            .then(res => setReviews(res.data))
            .catch(err => console.log(err))
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const updatedReview = {
            rating: form.rating.value,
            reviewText: form.reviewText.value
        }

        axios.put(`http://localhost:5000/review/${selectedReview._id}`, updatedReview)
            .then(() => {
                fetchReviews()
                setIsUpdateModalOpen(false)
                setSelectedReview(null)
            })
            .catch(err => console.log(err))
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/review/${selectedReview._id}`)
            .then(() => {
                fetchReviews()
                setIsDeleteModalOpen(false)
                setSelectedReview(null)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className='text-2xl text-white mb-6'>My Reviews ({reviews.length})</h2>
            
            <div className="flex flex-col gap-4">
                {reviews.map((review) => (
                    <div key={review._id} className="bg-gray-800 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
                        <div className="flex items-center mb-3">
                            <span className="text-yellow-400 mr-2">Rating: {review.rating}/5</span>
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className={`text-lg ${index < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-300 mb-4">{review.reviewText}</p>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => {
                                    setSelectedReview(review)
                                    setIsUpdateModalOpen(true)
                                }}
                                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                            >
                                Update
                            </button>
                            <button 
                                onClick={() => {
                                    setSelectedReview(review)
                                    setIsDeleteModalOpen(true)
                                }}
                                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

                {reviews.length === 0 && (
                    <p className="text-white text-center">You haven't submitted any reviews yet.</p>
                )}
            </div>

            {/* Update Modal */}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-lg w-96">
                        <h3 className="text-xl text-white mb-4">Update Review</h3>
                        <form onSubmit={handleUpdate}>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Rating</label>
                                <input 
                                    type="number" 
                                    name="rating"
                                    min="1"
                                    max="5"
                                    defaultValue={selectedReview?.rating}
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Review Text</label>
                                <textarea 
                                    name="reviewText"
                                    defaultValue={selectedReview?.reviewText}
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex gap-3">
                                <button 
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
                                >
                                    Update
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => {
                                        setIsUpdateModalOpen(false)
                                        setSelectedReview(null)
                                    }}
                                    className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl text-white mb-4">Confirm Delete</h3>
                        <p className="text-white mb-4">Are you sure you want to delete this review?</p>
                        <div className="flex gap-3">
                            <button 
                                onClick={handleDelete}
                                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
                            >
                                Delete
                            </button>
                            <button 
                                onClick={() => {
                                    setIsDeleteModalOpen(false)
                                    setSelectedReview(null)
                                }}
                                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyReview;