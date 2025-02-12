import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const AddServicePage = () => {
    const {user}=useContext(AuthContext)
    const handleSubmit=e=>{
        e.preventDefault()
        const form = e.target;
        const service = {
            image: form.image.value,
            title: form.title.value,
            companyName: form.companyName.value,
            website: form.website.value,
            description: form.description.value,
            category: form.category.value,
            price: parseFloat(form.price.value),
            addedDate: new Date(),
            userEmail: user.email
        };
        console.log(service)
        axios.post('https://service-review-system-server-flax.vercel.app/service',service)
        .then(res=>{
            console.log(res.data)
            form.reset()
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service Added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }

        })
            
        .catch(err=>{
          toast.error('Error',err.message)
        })
           

    }
    return (
        <div className="min-h-screen py-12 mt-16 bg-gradient-to-b from-base-200 to-base-300">
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-4xl font-bold text-center mb-8 text-primary">Add New Service</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Service Image URL</span>
                            </label>
                            <input 
                                type="url" 
                                name="image" 
                                required 
                                className="input input-bordered focus:input-primary transition-colors duration-300" 
                                placeholder="Enter image URL"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Service Title</span>
                            </label>
                            <input 
                                type="text" 
                                name="title" 
                                required 
                                className="input input-bordered text-black focus:input-primary transition-colors duration-300" 
                                placeholder="Enter service title"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Company Name</span>
                            </label>
                            <input 
                                type="text" 
                                name="companyName" 
                                required 
                                className="input input-bordered focus:input-primary transition-colors duration-300" 
                                placeholder="Enter company name"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Website</span>
                            </label>
                            <input 
                                type="url" 
                                name="website" 
                                required 
                                className="input input-bordered focus:input-primary transition-colors duration-300" 
                                placeholder="Enter website URL"
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Description</span>
                        </label>
                        <textarea 
                            name="description" 
                            required 
                            className="textarea text-black textarea-bordered focus:textarea-primary h-32 transition-colors duration-300" 
                            placeholder="Enter service description"
                        ></textarea>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Category</span>
                            </label>
                            <select name="category" required className="select select-bordered text-black focus:select-primary transition-colors duration-300">
                                <option value="" className="bg-neutral-800 text-white">Select a category</option>
                                <option value="Home Service" className="bg-neutral-800 text-white">Home Maintenance Services</option>
                                <option value="Cleaning" className="bg-neutral-800 text-white">Cleaning and Sanitization</option>
                                <option value="Renovation" className="bg-neutral-800 text-white">Renovation and Remodeling</option>
                                <option value="Food" className="bg-neutral-800 text-white">Food</option>
                                <option value="Transport" className="bg-neutral-800 text-white">Transport</option>
                                <option value="IT" className="bg-neutral-800 text-white">IT</option>
                                <option value="Daily Life" className="bg-neutral-800 text-white">Lifestyle and Convenience Services</option>
                                <option value="Beauty" className="bg-neutral-800 text-white">Wellness and Beauty</option>
                                <option value="Marketing" className="bg-neutral-800 text-white">Event Management Services</option>
                                <option value="Security"  className="bg-neutral-800 text-white">Security and Surveillance</option>
                                <option value="IT Service"  className="bg-neutral-800 text-white">Technical Support Services</option>
                                <option value="Child and Elder"  className="bg-neutral-800 text-white">Childcare and Elderly Care</option>
                                <option value="Economical" className="bg-neutral-800 text-white">Gardening and Landscaping</option>
                                {/* Add more categories as needed */}
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input 
                                type="number" 
                                name="price" 
                                required 
                                min="0" 
                                step="0.01" 
                                className="input input-bordered focus:input-primary transition-colors duration-300" 
                                placeholder="Enter price"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary w-full hover:btn-primary-focus transition-all duration-300 mt-8"
                    >
                        Add Service
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddServicePage;