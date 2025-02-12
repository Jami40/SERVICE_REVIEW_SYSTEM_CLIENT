import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import axios from 'axios';
import { motion } from 'framer-motion';

const Login = () => {
    const {login,googleSignIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const handleLoginSubmit=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)
        login(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
            navigate(location?.state ? location.state:"/")
            toast.success("Login succesFully");
            const user={email : email}
            axios.post(`https://service-review-system-server-flax.vercel.app/jwt`,user, { withCredentials:true })
           .then(res=>{
            console.log(res.data)
          })

        })
        .catch(error=>{
            e.target.reset();
            toast.error(error.message)
            console.log("Error",error.message)
        })

    }
    const handleGoogleSign=()=>{
        googleSignIn()
        .then(result=>{
            toast.success("Login succesFully");
            navigate("/")
        })
        .catch(error=>{
            toast.error(error.message)
        })

    }
    return (
        <div className="bg-base-200 min-h-screen flex flex-col justify-center items-center px-4 mt-16 py-8 md:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card bg-base-100 w-full max-w-sm md:max-w-lg shadow-lg rounded-lg md:rounded-xl p-4 md:p-8"
          >
          <form onSubmit={handleLoginSubmit} className="card-body p-2 md:p-6">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6"
              >
                Login your account
              </motion.h2>
              
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="form-control space-y-2"
              >
                <label className="label">
                  <span className="label-text text-sm md:text-base">Email</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="email" 
                  className="input text-black input-bordered w-full text-sm md:text-base" 
                  required 
                />
              </motion.div>

              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="form-control space-y-2 mt-2 md:mt-4"
              >
                <label className="label">
                  <span className="label-text text-sm md:text-base">Password</span>
                </label>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="password" 
                  className="input text-black input-bordered w-full text-sm md:text-base" 
                  required 
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-xs md:text-sm">Forgot password?</a>
                </label>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="form-control mt-4 md:mt-6"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary bg-[#403F3F] text-sm md:text-base w-full"
                >
                  Login
                </motion.button>
              </motion.div>
          </form>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-[#706F6F] text-sm md:text-base mt-2 md:mt-4 mb-4 md:mb-8"
          >
            Don't Have An Account? {' '}
            <Link className="text-[#FF8C47] hover:underline" to="/register">
              Register
            </Link>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoogleSign} 
              className="btn btn-secondary text-sm md:text-base px-8"
            >
              Google
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    );
};

export default Login;