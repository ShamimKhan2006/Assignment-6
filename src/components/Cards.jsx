import React, { use } from "react";
import Card from "./Card";

const Cards = ({ promise ,activeCarts,setactiveCarts}) => {
  const datas = use(promise);

 

  return (
    <div className="w-full max-w-10/12 mx-auto">
  
   



      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {datas.map((data,ind) => (
         <Card activeCarts={activeCarts} setactiveCarts={setactiveCarts} data={data} key={ind} ></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
