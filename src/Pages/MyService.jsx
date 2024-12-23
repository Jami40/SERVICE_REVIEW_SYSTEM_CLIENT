import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const MyService = () => {
    const {user}=useContext(AuthContext)
    const [services,setServices]=useState([])
    useEffect(()=>{
        // fetch(`http://localhost:5000/service/myFav?email=${user.email}`)
        // .then(res=>res.json())
        // .then(data=>setServices(data))
        axios.get(`http://localhost:5000/service/myFav?email=${user.email}`)
        .then(res=>setServices(res.data))
        .catch(err=>console.log(err))
    },[user.email])
    return (
        <div>
            <h2 className='text-white'>Services:{services.length}</h2>
            
        </div>
    );
};

export default MyService;