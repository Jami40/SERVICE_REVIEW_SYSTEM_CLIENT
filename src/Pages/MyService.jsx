import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { div } from 'framer-motion/client';

const MyService = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    const [search,setSearch]= useState("")
    const [services,setServices]=useState([])
    useEffect(()=>{
        axios.get(`https://service-review-system-server-flax.vercel.app/service/myFav?email=${user?.email}`)
        .then(res=>setServices(res.data))
        .catch(err=>console.log(err))
    },[user])

    // Add filtered services logic
    const filteredServices = services.filter(service => 
        service.title.toLowerCase().includes(search.toLowerCase()) ||
        service.companyName.toLowerCase().includes(search.toLowerCase())
    )

    // Add delete handler
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#37f51e",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://service-review-system-server-flax.vercel.app/service/${id}`)
                .then((res) => {
                    if (res.data.deletedCount > 0) {
                    Swal.fire(
                      "Removed!",
                      "The movie has been removed from your favorites.",
                      "success"
                    );
                    setServices(services.filter(service => service._id !== id))
                  }
                });
            }
        });  
    }
    const handleUpdate=(e,id)=>{
        e.preventDefault();
        const form = e.target;
        const updatedService = {
            title: form.title.value,
            companyName: form.companyName.value,
            price: form.price.value
        }
        console.log(updatedService)
        
        axios.put(`https://service-review-system-server-flax.vercel.app/service/${id}`, updatedService)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    // Update the services state with the new data
                    setServices(services.map(service => 
                        service._id === id ? {...service, ...updatedService} : service
                    ))
                    
                    // Close modal and show success message
                    document.getElementById(`update_modal_${id}`).close()
                    Swal.fire({
                        title: "Success!",
                        text: "Service updated successfully",
                        icon: "success"
                    });
                }
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update service",
                    icon: "error"
                });
            });
    }

    return (
        <div className='min-h-screen mt-10 bg-gradient-to-b from-slate-50 to-slate-100 py-12'>
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='bg-white rounded-2xl shadow-xl p-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
                        <h2 className="text-4xl font-bold text-slate-800 mb-4 md:mb-0">
                            My Services 
                            <span className="ml-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-2xl">
                                {services.length}
                            </span>
                        </h2>
                        <div className="w-full md:w-2/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="search"
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search by title or company..."
                                    className="w-full text-black rounded-xl bg-slate-50 border-2 border-blue-200 px-4 py-3 pl-12 
                                    focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200">
                        <table className="table">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-4">
                                        <label>
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                        </label>
                                    </th>
                                    <th className="px-6 py-4 text-slate-700">User</th>
                                    <th className="px-6 py-4 text-slate-700">Service Details</th>
                                    <th className="px-6 py-4 text-slate-700">Price</th>
                                    <th className="px-6 py-4 text-slate-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {filteredServices.map(service => (
                                    <tr key={service._id} className="hover:bg-slate-50 transition-colors">
                                        <th className="px-6 py-4">
                                            <label>
                                                <input type="checkbox" className="checkbox checkbox-primary" />
                                            </label>
                                        </th>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="avatar">
                                                    <div className="w-12 h-12 rounded-full ring-2 ring-blue-500 ring-offset-2">
                                                        <img src={user?.photoURL} alt="User" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-slate-800">{user?.displayName}</div>
                                                    <div className="text-sm text-slate-500">{user?.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <h2 className='font-semibold text-slate-800'>{service.title}</h2>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                                                {service.companyName}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-slate-800">${service.price}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button 
                                                    onClick={() => document.getElementById(`update_modal_${service._id}`).showModal()}
                                                    className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white border-none"
                                                >
                                                    Update
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(service._id)}
                                                    className="btn btn-sm bg-rose-500 hover:bg-rose-600 text-white border-none"
                                                >
                                                    Delete
                                                </button>
                                            </div>

                                            {/* Update Modal */}
                                            <dialog id={`update_modal_${service._id}`} className="modal">
                                                <div className="modal-box max-w-lg bg-white">
                                                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Update Service</h3>
                                                    <form onSubmit={(e) => handleUpdate(e, service._id)} method="dialog" className="space-y-4">
                                                        <div>
                                                            <label className="text-sm font-medium text-slate-700">Title</label>
                                                            <input name='title'
                                                                type="text" 
                                                                defaultValue={service.title}
                                                                className="input input-bordered w-full text-black mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="text-sm font-medium text-slate-700">Company Name</label>
                                                            <input name='companyName'
                                                                type="text" 
                                                                defaultValue={service.companyName}
                                                                className="input input-bordered w-full text-black mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="text-sm font-medium text-slate-700">Price</label>
                                                            <input name='price'
                                                                type="number" 
                                                                defaultValue={service.price}
                                                                className="input input-bordered w-full text-black mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                                            />
                                                        </div>
                                                        <div className="modal-action pt-4 border-t border-slate-200">
                                                            <button className="btn btn-outline border-slate-300 hover:bg-slate-100 hover:border-slate-300">
                                                                Cancel
                                                            </button>
                                                            <button type="submit" className="btn bg-blue-500 hover:bg-blue-600 text-white border-none">
                                                                Save Changes
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </dialog>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;