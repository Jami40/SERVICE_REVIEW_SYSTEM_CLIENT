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
        axios.post('http://localhost:5000/service',service)
        .then(res=>{
            console.log(res.data)
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
        <div className="max-w-4xl bg-base-200 mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Add New Service</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Image URL</span>
                    </label>
                    <input 
                        type="url" 
                        name="image" 
                        required 
                        className="input input-bordered" 
                        placeholder="Enter image URL"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Title</span>
                    </label>
                    <input 
                        type="text" 
                        name="title" 
                        required 
                        className="input input-bordered" 
                        placeholder="Enter service title"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input 
                        type="text" 
                        name="companyName" 
                        required 
                        className="input input-bordered" 
                        placeholder="Enter company name"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Website</span>
                    </label>
                    <input 
                        type="url" 
                        name="website" 
                        required 
                        className="input input-bordered" 
                        placeholder="Enter website URL"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea 
                        name="description" 
                        required 
                        className="textarea textarea-bordered h-24" 
                        placeholder="Enter service description"
                    ></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name="category" required className="select select-bordered">
                        <option value="">Select a category</option>
                        <option value="Home Service">Home Maintenance Services</option>
                        <option value="Cleaning">Cleaning and Sanitization</option>
                        <option value="Renovation">Renovation and Remodeling</option>
                        <option value="Daily Life">Lifestyle and Convenience Services</option>
                        <option value="Beauty">Wellness and Beauty</option>
                        <option value="Marketing">Event Management Services</option>
                        <option value="Security">Security and Surveillance</option>
                        <option value="IT Service">Technical Support Services</option>
                        <option value="Child and Elder">Childcare and Elderly Care</option>
                        <option value="Economical">Gardening and Landscaping</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input 
                        type="number" 
                        name="price" 
                        required 
                        min="0" 
                        step="0.01" 
                        className="input input-bordered" 
                        placeholder="Enter price"
                    />
                </div>
                <button type="submit" className='btn btn-primary w-full'>
                    Add Service
                </button>

                {/* <button 
                    type="submit" 
                    className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Adding Service...' : 'Add Service'}
                </button> */}
            </form>
        </div>
    );
};

export default AddServicePage;