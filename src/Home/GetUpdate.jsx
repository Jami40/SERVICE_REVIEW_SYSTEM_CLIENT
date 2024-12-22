import React from 'react';

const GetUpdate = () => {
    return (
        <div className='bg-[#d9871c]'>
            <div className='w-11/12 mx-auto py-16 flex flex-col md:flex-row lg:flex-row gap-9 items-center'>
               <div>
                <h2 className='text-2xl lg:text-3xl text-white font-semibold'>GET UPDATE SIGN UP NOW !</h2>
               </div>
               <div className='flex items-center'>
               <input type="text"  placeholder="Enter Your Email" className="py-3 border-2 rounded-l-lg w-full lg:w-[570px] bg-[#d9871c] rounded-r-none border-white" />
                <input className='bg-white font-semibold rounded-r-lg text-xl px-4 py-3' type="submit" value="Submit" />

               </div>

            </div>
            
        </div>
    );
};

export default GetUpdate;