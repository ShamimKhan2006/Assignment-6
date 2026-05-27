import React from 'react';

const Section = () => {
  return (
    <div className='w-full  bg-base-100  text-center my-40 '>
      <h1 className='text-5xl  font-bold mb-5'>Simple, Transparent Pricing</h1>
      <p className='mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      <div className='w-full max-w-8/12  px-2 mx-auto grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3  gap-8 relative'>

        <div className="card bg-base-200 shadow-sm hover:scale-110 transition cursor-pointer ">
          <div className="card-body">

            <div className='text-left'>
              <h2 className="text-3xl font-bold">Starter</h2>
              <p className='mt-3'>Perfect for getting started</p>
              <p><span className="text-2xl font-bold">$0</span>/Month</p>
            </div>
            <ul className="mt-6 text-left space-y-3">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Access to 10 free tools</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Basic templates</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Community support</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>1 project per month</span>
              </li>
            </ul>
            <div className="mt-22">
              <button className="btn  bg-gradient-to-r from-[#4f39f6] to-[#9514fa] btn-block rounded-2xl font-semibold ">Get Started Free</button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] shadow-sm hover:border-purple-500 hover:scale-110 transition cursor-pointer">
          <div className="card-body ">

            <div className='text-left text-white'>
              <p className=' p-4 rounded-2xl badge  absolute top-[-20px] right-[135px] badge-warning '>Most popular</p>
              <h2 className="text-3xl font-bold">Pro</h2>
              <p className='mt-3'>Best for professionals</p>
              <p><span className="text-2xl font-bold">$29</span>/Month</p>
            </div>
            <ul className="mt-6 text-left text-white space-y-3">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Access to all premium tools</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Unlimited templates</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Priority support</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Unlimited projects</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Cloud sync</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>UAdvanced analytics</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-white btn-block rounded-2xl font-semibold"> <span className='text-[#9514fa]'>Start Pro Trial</span></button>
            </div>
          </div>
        </div>

        <div className="card  bg-base-200 shadow-sm hover:scale-110 transition cursor-pointer">
          <div className="card-body">

            <div className='text-left'>
              <h2 className="text-3xl font-bold">Enterprise</h2>
              <p className='mt-3'>For teams and businesses</p>
              <p><span className="text-2xl font-bold">$99</span>/Month</p>
            </div>
            <ul className="mt-6 text-left space-y-3">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Everything in Pro</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Team collaboration</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Custom integrations</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Dedicated support</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>SLA guarantee</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Custom branding</span>
              </li>
            </ul>
            <div className="mt-8">
              <button className="btn  bg-gradient-to-r from-[#4f39f6] to-[#9514fa] btn-block rounded-2xl font-semibold">Contact Sales</button>
            </div>
          </div>
        </div>








      </div>

    </div>
  );
};

export default Section;