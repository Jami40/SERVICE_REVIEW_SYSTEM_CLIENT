import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser,googleSignIn}=useContext(AuthContext)
    const [errorMessage,setErrorMessage]=useState('')
    const navigate=useNavigate()
    const handleSubmit=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        setErrorMessage('');

        const passwordPattern=/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if(!passwordPattern.test(password)){
          toast.error("Must have an Uppercase and Must have an Lower Case and Password long at least 6 character")
            setErrorMessage('Must have an Uppercase and Must have an Lower Case and Password long at least 6 character')
            return;
        }
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset(); 
            // toast.success("Register Succesfully")
            // manageProfile(name,photo) 
            navigate("/")
        })
        .catch(err=>{
            // toast.error(err.message)
            console.log(err)
        })

    }
    const handleGoogleSign=()=>{
        googleSignIn()
        .then(result=>{
        //   toast.success("Google signIn success")
          console.log(result.user)
            navigate("/")
        })
        .catch(error=>{
            console.log(error)
        //   toast.error(error.message)
        })

    }
    return (
        <div>
      <div className="bg-base-200 min-h-screen flex flex-col justify-center items-center">
      <div className="card my-7 bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
      <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-2xl font-semibold text-center mb-5">Register your account</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="Enter your password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
        </div>
        <div className="flex gap-2 items-center">
        <div className="form-control">
          <label className="cursor-pointer label">
            <input type="checkbox" className="checkbox checkbox-accent" />
          </label>
        </div>
        <div>Accept Term & Conditions</div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-[#403F3F]">Register</button>
        </div>
      </form>
      <p className="text-center text-[#706F6F] -mt-6 mb-8">Already Have An Account?<Link className="text-[#FF8C47]" to="/login">Login</Link></p>
      <p className="text-center">
                  <button onClick={handleGoogleSign} className="btn btn-secondary">Google</button>
               
     </p>
    </div>
      
  </div>
      
  </div>
    );
};

export default Register;