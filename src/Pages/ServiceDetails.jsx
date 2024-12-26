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
    const handleSubmitReview=e=>{
        e.preventDefault();
        const newReview = {
            text: review,
            rating,
            title:data.title,
            date: new Date().toISOString(),
            user: {
                name: user.displayName,
                photo: user.photoURL,
            },
            email:user.email
        };
        console.log(newReview)
        axios.post('https://service-review-system-server-flax.vercel.app/review',newReview)
        .then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Review added successfully',
                showConfirmButton: false,
                timer: 1500
            });
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        axios.get('https://service-review-system-server-flax.vercel.app/review')
        .then(res=>{
            setReviews(res.data)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div className="container mx-auto p-4">
            {/* Service Details Section */}
            <div className="card bg-base-100 shadow-xl mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                 <img 
                                     src={data.image} 
                                     alt={data.title}
                                     className="w-full min-h-screen object-cover"
                                 />
                                 <div className="p-4">
                                     <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                                     <p className=""><span className='font-semibold'>Description</span>: {data.description}</p>
                                     <p className="mt-4"><span className='font-semibold'>Company Name</span>: {data.companyName}</p>
                                     <p className="my-4"><span className='font-semibold'>Category</span>: {data.category}</p>
                                     <p className=""><span className=' font-semibold'>Price</span>: {data.price}</p>
                                 </div>
                             </div>
            </div>

            {/* Add Review Section */}
            <div className="card bg-base-100 shadow-xl mb-8">
                <div className="card-body">
                    <h3 className="text-xl font-bold mb-4">Add Your Review</h3>
                    <form onSubmit={handleSubmitReview}>
                        <div className="mb-4">
                            <Rating
                                initialRating={rating}
                                onChange={(value) => setRating(value)}
                                emptySymbol={<FaRegStar className="text-yellow-400 text-2xl" />}
                                fullSymbol={<FaStar className="text-yellow-400 text-2xl" />}
                            />
                        </div>
                        <textarea
                            className="textarea textarea-bordered w-full h-32 mb-4"
                            placeholder="Write your review here..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={!rating || !review.trim()}
                        >
                            Post Review
                        </button>
                    </form>
                </div>
            </div>

            {/* Reviews List Section */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h3 className="text-xl font-bold mb-4">
                        Reviews ({reviews.length})
                    </h3>
                    <div className="space-y-4">
                        {reviews.map((review, index) => (
                            <div key={index} className="border-b last:border-b-0 pb-4">
                                <div className="flex items-center gap-4 mb-2">
                                    <img 
                                        src={review.user?.photo} 
                                        alt={review.user?.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{review.user?.name}</h4>
                                        <p className="text-sm text-gray-500">
                                            {new Date(review.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <Rating
                                    initialRating={review.rating}
                                    readonly
                                    emptySymbol={<FaRegStar className="text-yellow-400" />}
                                    fullSymbol={<FaStar className="text-yellow-400" />}
                                />
                                <p className="mt-2">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;