import React from 'react';
import { motion } from 'framer-motion';

const HappyCustomer = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marketing Director",
            comment: "Absolutely amazing service! The team went above and beyond our expectations.",
            image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            name: "Michael Chen",
            role: "Tech Lead",
            comment: "The best decision we made for our business. Highly recommended!",
            image: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            name: "Emma Rodriguez",
            role: "E-commerce Manager",
            comment: "Their solutions transformed our online presence. Sales have increased by 150% since implementation.",
            image: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
            name: "David Kim",
            role: "Startup Founder",
            comment: "Exceptional quality and attention to detail. They truly understand what startups need.",
            image: "https://randomuser.me/api/portraits/men/4.jpg"
        },
        {
            name: "Lisa Thompson",
            role: "Product Designer",
            comment: "The user interface they designed is both beautiful and functional. Our customers love it!",
            image: "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
            name: "James Wilson",
            role: "Operations Manager",
            comment: "Their support team is responsive and professional. They're always there when we need them.",
            image: "https://randomuser.me/api/portraits/men/6.jpg"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">
                    What Our Happy Customers Say
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-indigo-900">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "{testimonial.comment}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default HappyCustomer;