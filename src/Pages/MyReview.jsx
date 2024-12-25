import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/review/myRev?email=${user?.email}`)
        .then(res => setReviews(res.data))
        .catch(err => console.log(err))
    }, [user])

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className='text-2xl text-white mb-6'>My Reviews ({reviews.length})</h2>
            
            <div className="flex flex-col bg-base-200 gap-4">
                {reviews.map((review) => (
                    <div key={review._id} className=" shadow-xl rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
                        <div className="flex items-center mb-3">
                            <span className=" mr-2">Rating: {review.rating}/5</span>
                            {/* Optional: Display stars based on rating */}
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className={`text-lg ${index < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className="">{review.text}</p>
                    </div>
                ))}

                {reviews.length === 0 && (
                    <p className="text-white text-center">You haven't submitted any reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyReview;