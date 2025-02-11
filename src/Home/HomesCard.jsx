import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomesCard = () => {
    const [service, setService] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://service-review-system-server-flax.vercel.app/service/home')
            .then(res => setService(res.data))
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] py-10">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl font-bold text-center mb-12 text-[#00D4FF]"
                >
                    Featured Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.map((service) => (
                        <motion.div
                            key={service._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="relative group cursor-pointer"
                            onClick={() => navigate(`/details/${service._id}`)}
                        >
                            <div className="relative overflow-hidden rounded-xl bg-[#1F2937] shadow-xl">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className="aspect-w-16 aspect-h-9"
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-64 object-cover"
                                    />
                                </motion.div>
                                
                                {/* Overlay with title */}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
                                >
                                    <motion.h3 
                                        initial={{ y: 20 }}
                                        whileHover={{ y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-2xl font-bold text-white mb-2"
                                    >
                                        {service.title}
                                    </motion.h3>
                                    
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="text-[#00D4FF] font-semibold">
                                            View Details
                                        </span>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-5 w-5 text-[#00D4FF]" 
                                            viewBox="0 0 20 20" 
                                            fill="currentColor"
                                        >
                                            <path 
                                                fillRule="evenodd" 
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                                clipRule="evenodd" 
                                            />
                                        </svg>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomesCard;