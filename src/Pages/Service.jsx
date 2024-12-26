import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    return (
        <div className='bg-neutral'>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-white text-center mb-6">All Services</h2>
                
                {/* Category Filter Dropdown */}
                <div className="mb-6 flex justify-center">
                    <select 
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map((service) => (
                        <div key={service._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className=""><span className='font-semibold'>Description</span>: {service.description}</p>
                                <p className="my-4"><span className='font-semibold'>Category</span>: {service.category}</p>
                                <p className=""><span className=' font-semibold'>Price</span>: {service.price}</p>
                                <button
                                    onClick={() => navigate(`/details/${service._id}`)}
                                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    See Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;