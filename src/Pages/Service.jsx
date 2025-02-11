import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Service = () => {
    const [services, setServices] = useState([])
    const [filteredServices, setFilteredServices] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://service-review-system-server-flax.vercel.app/service')
            .then(res => {
                setServices(res.data)
                setFilteredServices(res.data)
            })
    }, [])

    // Handle category filter change
    const handleCategoryChange = (e) => {
        const category = e.target.value
        setSelectedCategory(category)
        
        if (category === 'all') {
            setFilteredServices(services)
        } else {
            const filtered = services.filter(service => 
                service.category.toLowerCase() === category.toLowerCase()
            )
            setFilteredServices(filtered)
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const imageVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const textVariants = {
        hover: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='min-h-screen bg-gradient-to-b from-neutral to-neutral-800'
        >
            <div className="container mx-auto px-4 mt-12 py-12">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-white text-center mb-8"
                >
                    Our Services
                </motion.h2>
                
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 flex justify-center"
                >
                    <select 
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 
                                 focus:outline-none focus:border-primary transition-all duration-300
                                 hover:bg-white/20 backdrop-blur-sm"
                    >
                        <option value="all">All Categories</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="IT">IT</option>
                        <option value="Home Service">Home Maintenance Services</option>
                        <option value="Cleaning">Cleaning and Sanitization</option>
                        <option value="Renovation">Renovation and Remodeling</option>
                        <option value="Daily Life">Lifestyle and Convenience Services</option>
                        <option value="Beauty">Wellness and Beauty</option>
                        <option value="Marketing">Event Management Services</option>
                        <option value="Security">Security and Surveillance</option>
                        <option value="IT Service">Technical Support Services</option>
                        <option value="Child and Elder">Childcare and Elderly Care</option>
                        <option value="Economical">Gardening and Landscaping</option>
                    </select>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filteredServices.map((service) => (
                        <motion.div 
                            key={service._id}
                            variants={cardVariants}
                            whileHover="hover"
                            onClick={() => navigate(`/details/${service._id}`)}
                            className="relative overflow-hidden rounded-xl cursor-pointer"
                        >
                            {/* Overlay Gradient */}
                            <motion.div 
                                initial={{ opacity: 0.6 }}
                                whileHover={{ opacity: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 
                                          to-transparent z-10" 
                            />
                            
                            {/* Image */}
                            <motion.img 
                                variants={imageVariants}
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-[300px] object-cover"
                            />

                            {/* Service Title and Button */}
                            <motion.div 
                                className="absolute bottom-0 left-0 right-0 p-6 z-20"
                            >
                                <motion.h3 
                                    variants={textVariants}
                                    initial={{ y: 10 }}
                                    className="text-xl font-bold text-white mb-2"
                                >
                                    {service.title}
                                </motion.h3>
                                
                                <motion.span 
                                    variants={textVariants}
                                    initial={{ opacity: 0, y: 20 }}
                                    className="inline-block px-4 py-1 bg-primary/80 text-white 
                                             text-sm rounded-full"
                                >
                                    View Details
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Service;