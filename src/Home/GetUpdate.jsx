import React from 'react';

const GetUpdate = () => {
    return (
        <div className='bg-[#2b3440]'>
            <div className='w-11/12 mx-auto py-16 flex flex-col md:flex-row lg:flex-row gap-9 items-center'>
               <div className='max-w-md'>
                <h2 className='text-2xl lg:text-3xl text-white font-semibold mb-2'>Stay Connected with Latest Service Reviews!</h2>
                <p className='text-gray-300 text-sm'>Subscribe to our newsletter for the newest service reviews, ratings, and exclusive insights from our community of verified customers.</p>
               </div>
               <div className='flex items-center w-full md:w-auto'>
                <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="py-3 px-4 border-2 rounded-l-lg w-full lg:w-[400px] bg-transparent rounded-r-none border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-white" 
                />
                <button 
                    className='bg-[#ff6b6b] hover:bg-[#ff5252] transition-colors duration-300 font-semibold rounded-r-lg text-white text-lg px-6 py-3' 
                    type="submit"
                >
                    Subscribe
                </button>
               </div>
               {/* <div className='flex items-center'>
               <input type="text"  placeholder="Enter Your Email" className="py-3 border-2 rounded-l-lg w-full lg:w-[570px] bg-[#d9871c] rounded-r-none border-white" />
                <input className='bg-white font-semibold rounded-r-lg text-xl px-4 py-3' type="submit" value="Submit" />

               </div> */}

            </div>
            
        </div>
    );
};

export default GetUpdate;