import React from 'react';

const Aside = () => {
    return (
        <div className=' w-full my-30'>
            <div className='text-center py-20'>
                 <h1 className='font-bold text-5xl'>Get Started in 3 Steps</h1>
            <p className='mt-5'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='w-full max-w-7xl px-6 mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-5  gap-6 '>
            <div className='shadow p-20 bg-base-200 rounded-3xl space-y-4 relative hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition duration-300 cursor-pointer'>
              <button className='rounded-full  p-4 btn bg-gradient-to-b from-indigo-600 to-purple-600 absolute top-5 right-7 text-white'>01</button>
               <div>
                 <img src="/assets/user.png" alt="" />
               </div>
               <div className='text-center'>
                 <h2 className='font-bold text-2xl'>Create Account</h2>
                <p>Sign up for free in seconds. No credit card required to get started.</p>
               </div>
            </div>
            <div className='shadow p-20  bg-base-200 rounded-3xl space-y-4 relative hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition duration-300 cursor-pointer '>
                <button className='rounded-full  p-4 btn bg-gradient-to-b from-indigo-600 to-purple-600 absolute top-5 right-7 text-white'>02</button>
               <div>
                 <img src="/assets/package.png" alt="" />
               </div> 
               <div className='text-center'>
                 <h2 className='font-bold text-2xl'>Choose Products</h2>
                <p>that fit your needs.Browse our catalog and select the tools</p>
               </div>
            </div>
            <div className='shadow p-20  bg-base-200 rounded-3xl  space-y-4 mx-auto relative hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition duration-300 cursor-pointer'>
              <button className='rounded-full  p-4 btn bg-gradient-to-b from-indigo-600 to-purple-600 absolute top-5 right-7 text-white'>03</button>
               <div className='felx justify-center items-center'>
                 <img  src="/assets/rocket.png" alt="" />
               </div>
              <div className='text-center '>
                  <h2 className='font-bold text-2xl'>Start Creating</h2>
                <p>Download and start using your premium tools immediately.</p>
              </div>
            </div>
           </div>
        </div>
    );
};

export default Aside;