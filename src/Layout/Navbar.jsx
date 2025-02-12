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
        <div className="fixed  top-0 left-0 right-0 z-50">
            <div className="navbar lg:px-12 bg-[#1F2937] backdrop-blur-lg  border-b border-[#4B5563]">
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
                      <div>
                        <NavLink to="/" className="flex items-center gap-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-8 w-8 text-[#00D4FF]" 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                            >
                                <path 
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
                                />
                            </svg>
                            <span className="text-white text-2xl font-bold">Review Trackers</span>
                        </NavLink>
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
            </div>
    );
};

export default Navbar;