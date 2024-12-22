import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const [services,setServices]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:5000/service')
        .then(res=>setServices(res.data))
    },[])
    return (
        <div className='bg-neutral'>
             <div className="container mx-auto px-4 py-8">
                     <h2 className="text-3xl font-bold text-white text-center mb-6">All Services</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {services.map((service) => (
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