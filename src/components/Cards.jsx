import React, { use } from "react";
import Card from "./Card";

const Cards = ({ promise }) => {
  const datas = use(promise);

 

  return (
    <div className="w-full max-w-10/12 mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed <br></br>
          to boost your productivity and creativity.
        </p>
      </div>

     {/* tabs */}

     <div className="tabs tabs-box flex justify-center items-center mx-auto border-none bg-white mt-5">
  <input type="radio" name="my_tabs_1" className="tab rounded-full pl-4 w-30" aria-label="Products" defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full pl-4 w-30" aria-label="Carts" />

</div>



      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {datas.map((data) => (
         <Card data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
