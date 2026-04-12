import React from "react";
import BannerPic from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2   mt-20 ">
      <div className="left space-y-7">
        <button className="btn bg--gradient-to-b from-indigo-600 to-purple-600 rounded-2xl text-purple-600">New: AI-Powered Tools Available</button>
        <h1 className="text-6xl font-bold ">Supercharge Your Digital Workflow</h1>
        <p className="w-120">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-3">
    <button className="btn bg-gradient-to-b from-indigo-600 to-purple-600 text-white rounded-2xl hover:scale-110 transition"><span className="">
       Explore Products
    </span>

</button>
            <button className="btn  text-purple-600 border border-purple-600 rounded-2xl hover:scale-110 transition">Watch Demo</button>
        </div>
      </div>
      <div className='right'>
        <img src={BannerPic} alt="" />
      </div>
    </div>
  );
};

export default Banner;
