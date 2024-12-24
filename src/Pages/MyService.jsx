import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const MyService = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    const [search,setSearch]= useState("")
    const [services,setServices]=useState([])
    useEffect(()=>{
        // fetch(`http://localhost:5000/service/myFav?email=${user.email}`)
        // .then(res=>res.json())
        // .then(data=>setServices(data))
        axios.get(`http://localhost:5000/service/myFav?email=${user?.email}`)
        .then(res=>setServices(res.data))
        .catch(err=>console.log(err))
    },[user])
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
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        services.map(service => <tr key={service._id}>
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
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyService;