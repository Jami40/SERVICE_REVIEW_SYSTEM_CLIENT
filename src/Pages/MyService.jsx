import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyService = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    const [search,setSearch]= useState("")
    const [services,setServices]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/service/myFav?email=${user?.email}`,{withCredentials:true})
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
                axios.delete(`http://localhost:5000/service/${id}`)
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
        
        axios.put(`http://localhost:5000/service/${id}`, updatedService)
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
        <div className='w-11/12 mx-auto bg-base-200 py-10'>
        <div className='flex justify-between items-center'>
        <h2 className="text-3xl pl-4 pb-5">My Services: {services.length}</h2>
        <div className="py-5 w-4/5  md:w-2/5  flex pr-6 ">
        <input
          type="text"
          name="search"
          onChange={(e)=> setSearch(e.target.value)}
          placeholder="Search service"
          className="w-full   rounded-xl bg-[#37f51e49] border-2 border-[#37f51e] px-4 py-2"
        />
      </div>
        </div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredServices.map(service => <tr key={service._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
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
                                    <div>
                                        <div className="font-bold">{user?.displayName}</div>
                                        <div className="text-sm opacity-50">{user?.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h2 className='font-semibold'>{service.title}</h2>
                                <p className="badge badge-ghost badge-sm pl-0">{service.companyName}</p>
                            </td>
                            <td>{service.price}</td>
                            <td className="flex gap-2">
                                <button 
                                    onClick={() => document.getElementById(`update_modal_${service._id}`).showModal()}
                                    className="btn btn-sm btn-warning"
                                >
                                    Update
                                </button>
                                <button 
                                    onClick={() => handleDelete(service._id)}
                                    className="btn btn-sm btn-error"
                                >
                                    Delete
                                </button>

                                {/* Update Modal */}
                                <dialog id={`update_modal_${service._id}`} className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Update Service</h3>
                                        <form onSubmit={(e) => handleUpdate(e, service._id)} method="dialog">
                                            <input name='title'
                                                type="text" 
                                                defaultValue={service.title}
                                                className="input input-bordered w-full mt-4"
                                            />
                                            <input name='companyName'
                                                type="text" 
                                                defaultValue={service.companyName}
                                                className="input input-bordered w-full mt-4"
                                            />
                                            <input name='price'
                                                type="number" 
                                                defaultValue={service.price}
                                                className="input input-bordered w-full mt-4"
                                            />
                                            <div className="modal-action">
                                                <button className="btn">Close</button>
                                                <button  type="submit" className="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </dialog>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyService;