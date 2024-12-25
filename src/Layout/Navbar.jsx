import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user,signOutUser}=useContext(AuthContext)
    const handleSignOut = () =>{
        signOutUser()
        .then(()=>{
           toast.success("Sign Out successFully")
        })
        .catch(error=>{
            toast.error(error.message);
            console.log("Error",error.message)

        })     
    }
    const links=<>
       <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/service">Services</NavLink></li>    
        {
            user && <>
               <li><NavLink to="/addService">Add Service</NavLink></li>
               <li><NavLink to="/myService">My Service</NavLink></li>
               <li><NavLink to="/myReview">My Review</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
              <img className="w-44" src='https://i.ibb.co.com/QpyksDr/Review-Trackers-logo-tagline.webp' alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-2  items-center">
         {
             user?
             <>
             <a onClick={handleSignOut} className='btn btn-accent'>Logout</a>
             <div>
                 <img title={user.displayName} className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
             
             </div>
             </>
     
              :<>  <NavLink className='btn btn-outline btn-primary font-semibold' to="/login">Login</NavLink>
              <NavLink className='btn btn-outline btn-primary font-semibold' to="/register">Register</NavLink>

              </>
         }
                 
               
        </div>
      </div>

    );
};

export default Navbar;