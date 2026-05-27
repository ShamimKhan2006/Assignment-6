import React from "react";
import { toast } from "react-toastify";

const Carts = ({ carts, set}) => {

    const handlePay=()=>{
  
         toast.success("Process to CheckOut Successfull")
        set([])
    }
    const handleDelete=(cart)=>{
        const fillterArray=carts.filter(c => c.id !== cart.id)
        set(fillterArray)
    }
    const totall=carts.reduce((sum,cart)=> sum + cart.price,0) 
  return (
    <div className="w-full max-w-7xl mx-auto bg-white shadow-sm rounded-2xl p-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        Your Carts
      </h1>
         {
          carts.length === 0? <div className="shadow-md p-6 bg-base-200">
             <h1 className="text-center font-bold text-blue-500">Carts is not found......!</h1>
             </div>:<>
            
            <div className="space-y-6">
        {carts.map((cart) => (
          <div
            key={cart.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 bg-base-200 p-5 rounded-2xl shadow-sm"
          >
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <img
                src={cart.img}
       
                
              />

              <div>
                <h2 className="text-xl font-semibold">
                  {cart.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {cart.description}
                </p>

                <p className="font-medium mt-2">
                  ${cart.price}/{cart.period}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <button onClick={()=>handleDelete(cart)} className="btn btn-error btn-outline rounded-xl">
              Remove
            </button>
          </div>
          
        ))}

        <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Totall</h1>
            <p className="font-bold text-2xl">${totall}</p>
        </div>
         <button onClick={handlePay} className={'w-full btn btn-primary p-4 text-md rounded-md font-bold'}>Process to Cheaout</button>
      </div>
            </>
         }
      
    </div>
  );
};

export default Carts;