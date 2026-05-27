import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Card = ({data,activeCarts,setactiveCarts}) => {

     const [buy ,setBuy]=useState(false)
         

     const handle=() =>{
       if(!buy){
        setBuy(true)
         toast.success("Buy Successfull")
           
       }
     else{

         toast.error("Already bought")
     }
      
        setactiveCarts([...activeCarts,data])
     }
    return (
       <div key={data.id}>
            <div className=" card h-full bg-base-100 space-x-4  shadow-lg relative">
              <div className="card-body  bg-bese-200 w-full">
                <p
                  className={`absolute top-2 right-6 font-semibold 
            ${data.tagType === "popular" && "badge badge-warning"}
             ${data.tagType === "new" && "badge  badge-success"}
            ${data.tagType === "best seller" &&  " badge badge-error"}
          
          `}
                >
                  {data.tag}
                </p>
                <div className="h-15">
                  <img className="object-contain" src={data.img} alt="" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">{data.name}</h2>
                  <p>{data.description}</p>
                  <p>
                    {" "}
                    <span className="text-3xl font-bold">${data.price}</span>
                    / {data.period}
                  </p>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  {data.features?.map((list, ind) => (
                    <li key={ind}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success h-full"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{list}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button  className={buy?'btn btn-success  transition-all duration-300 hover:scale-110':'btn  btn-primary'} onClick={handle} >
                    {buy?'Buy Completed':'Buy now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Card;