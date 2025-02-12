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
        <div className='bg-[#f8f9fa] py-10'>
            <div className='w-11/12 mx-auto mt-14'>
                <div className='flex justify-between items-center'>
                    <h2 className="text-3xl pl-4 pb-5 text-[#1A5D1A] font-bold">My Services: {services.length}</h2>
                    <div className="py-5 w-4/5 md:w-2/5 flex pr-6">
                        <input
                            type="text"
                            name="search"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search service"
                            className="w-full text-black rounded-xl bg-white border-2 border-[#1A5D1A] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A5D1A] focus:border-transparent"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="table bg-white">
                        <thead className="bg-[#1A5D1A]">
                            <tr>
                                <th className="text-white">
                                    <label>
                                        <input type="checkbox" className="checkbox checkbox-success border-white" />
                                    </label>
                                </th>
                                <th className="text-white font-bold">Name</th>
                                <th className="text-white font-bold">Title</th>
                                <th className="text-white font-bold">Price</th>
                                <th className="text-white font-bold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredServices.map(service => <tr key={service._id} className="hover:bg-[#E8F3E8]">
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox checkbox-success" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user?.photoURL}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className='text-black'>
                                            <div className="font-bold">{user?.displayName}</div>
                                            <div className="text-sm opacity-50">{user?.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className='font-semibold text-[#1A5D1A]'>{service.title}</h2>
                                    <p className="badge bg-[#E8F3E8] text-[#1A5D1A] badge-sm pl-0">{service.companyName}</p>
                                </td>
                                <td className="font-medium text-gray-700">{service.price}</td>
                                <td className="flex gap-2">
                                    <button 
                                        onClick={() => document.getElementById(`update_modal_${service._id}`).showModal()}
                                        className="btn btn-sm bg-[#1A5D1A] hover:bg-[#164B16] text-white border-none"
                                    >
                                        Update
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(service._id)}
                                        className="btn btn-sm bg-[#D64045] hover:bg-[#C13238] text-white border-none"
                                    >
                                        Delete
                                    </button>

                                    {/* Update Modal */}
                                    <dialog id={`update_modal_${service._id}`} className="modal">
                                        <div className="modal-box bg-white border-2 border-[#1A5D1A]">
                                            <h3 className="font-bold text-lg text-[#1A5D1A]">Update Service</h3>
                                            <form onSubmit={(e) => handleUpdate(e, service._id)} method="dialog">
                                                <input name='title'
                                                    type="text" 
                                                    defaultValue={service.title}
                                                    className="input input-bordered bg-white focus:border-[#1A5D1A] focus:ring-2 focus:ring-[#1A5D1A] w-full mt-4"
                                                />
                                                <input name='companyName'
                                                    type="text" 
                                                    defaultValue={service.companyName}
                                                    className="input input-bordered bg-white focus:border-[#1A5D1A] focus:ring-2 focus:ring-[#1A5D1A] w-full mt-4"
                                                />
                                                <input name='price'
                                                    type="number" 
                                                    defaultValue={service.price}
                                                    className="input input-bordered bg-white focus:border-[#1A5D1A] focus:ring-2 focus:ring-[#1A5D1A] w-full mt-4"
                                                />
                                                <div className="modal-action">
                                                    <button className="btn border-[#1A5D1A] hover:bg-[#E8F3E8] text-[#1A5D1A]">Close</button>
                                                    <button type="submit" className="btn bg-[#1A5D1A] hover:bg-[#164B16] text-white border-none">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </dialog>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyService;