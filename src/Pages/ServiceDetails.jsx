import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
    const data=useLoaderData()
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const {user,setLoading}=useContext(AuthContext)
    const handleSubmitReview = e => {
        e.preventDefault();
        const newReview = {
            text: review,
            rating,
            title: data.title,
            date: new Date().toISOString(),
            user: {
                name: user.displayName,
                photo: user.photoURL,
            },
            email: user.email
        };

        axios.post('https://service-review-system-server-flax.vercel.app/review', newReview)
            .then(res => {
                // Update the reviews state with the new review
                setReviews([newReview, ...reviews]);
                
                // Clear the form
                setReview('');
                setRating(0);

                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Review added successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again.',
                });
            });
    }

    useEffect(() => {
        axios.get('https://service-review-system-server-flax.vercel.app/review')
            .then(res => {
                // Sort reviews to show newest first
                const sortedReviews = res.data.sort((a, b) => 
                    new Date(b.date) - new Date(a.date)
                );
                setReviews(sortedReviews);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);
    // const handleSubmitReview=e=>{
    //     e.preventDefault();
    //     const newReview = {
    //         text: review,
    //         rating,
    //         title:data.title,
    //         date: new Date().toISOString(),
    //         user: {
    //             name: user.displayName,
    //             photo: user.photoURL,
    //         },
    //         email:user.email
    //     };
    //     console.log(newReview)
    //     axios.post('https://service-review-system-server-flax.vercel.app/review',newReview)
    //     .then(res=>{
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Success!',
    //             text: 'Review added successfully',
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //         console.log(res.data)
    //     })
    //     .catch(err=>console.log(err))
    // }
    // useEffect(()=>{
    //     axios.get('https://service-review-system-server-flax.vercel.app/review')
    //     .then(res=>{
    //         setReviews(res.data)
    //         setLoading(false)
    //     })
    //     .catch(err=>console.log(err))
    // },[])
    return (
        <div className="container mt-16 mx-auto p-4 max-w-7xl">
            {/* Service Details Section */}
            <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl mb-8 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <img 
                            src={data.image} 
                            alt={data.title}
                            className="w-full h-[50vh] md:h-[60vh] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6 md:p-8 bg-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-800">{data.title}</h3>
                        <div className="space-y-4">
                            <p className="text-gray-700"><span className='font-semibold text-indigo-600'>Description</span>: {data.description}</p>
                            <p className=""><span className='font-semibold text-indigo-600'>Company Name</span>: {data.companyName}</p>
                            <p className=""><span className='font-semibold text-indigo-600'>Category</span>: {data.category}</p>
                            <p className="text-xl"><span className='font-semibold text-indigo-600'>Price</span>: 
                                <span className="text-green-600 font-bold ml-2">${data.price}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Review Section */}
            <div className="card bg-white shadow-xl mb-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-6 text-indigo-800 border-b pb-2">Add Your Review</h3>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                        <div className="mb-4 animate-pulse">
                            <Rating
                                initialRating={rating}
                                onChange={(value) => setRating(value)}
                                emptySymbol={<FaRegStar className="text-yellow-400 text-3xl md:text-4xl hover:scale-110 transition-transform" />}
                                fullSymbol={<FaStar className="text-yellow-400 text-3xl md:text-4xl hover:scale-110 transition-transform" />}
                            />
                        </div>
                        <textarea
                            className="textarea text-black textarea-bordered w-full h-32 mb-4 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                            placeholder="Write your review here..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                        <button 
                            type="submit" 
                            className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full md:w-auto px-8 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
                            disabled={!rating || !review.trim()}
                        >
                            Post Review
                        </button>
                    </form>
                </div>
            </div>

            {/* Reviews List Section */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-6 text-indigo-800 border-b pb-2">
                        Reviews ({reviews.length})
                    </h3>
                    <div className="space-y-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="border-b last:border-b-0 pb-6 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                                    <img 
                                        src={review.user?.photo} 
                                        alt={review.user?.name}
                                        className="w-12 h-12 rounded-full ring-2 ring-indigo-100"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-lg text-indigo-800">{review.user?.name}</h4>
                                        <p className="text-sm text-gray-500">
                                            {new Date(review.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <Rating
                                        initialRating={review.rating}
                                        readonly
                                        emptySymbol={<FaRegStar className="text-yellow-400 text-xl" />}
                                        fullSymbol={<FaStar className="text-yellow-400 text-xl" />}
                                    />
                                </div>
                                <p className="mt-2 text-gray-700 leading-relaxed">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;