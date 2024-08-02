import React from "react";
// import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col items-center bg-[#fdfbfb] m-[20px] pb-[30px] text-center rounded-[10px]">
      <div className="item flex flex-col items-center ">
        <span className="m-[10px] p-[5px] w-[80%] border-t-2 border-b-2 border-solid border-[#a7a4a4] font-varelaRound text-[12px] text-[#333] font-semibold">ABOUT ME</span>
        <img
          src="https://plus.unsplash.com/premium_photo-1695930295417-ddfc8cf85cec?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-[250px] w-[80%] object-cover mt-"
        />
        <p className="p-[30px] text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          debitis amet, Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit.
        </p>
      </div>
      <div className="item item flex flex-col items-center ">
        <span className="m-[10px] p-[5px] w-[80%] border-t-2 border-b-2 border-solid border-[#a7a4a4] font-varelaRound text-[12px] text-[#333] font-semibold">CATEGORY</span>
        <ul className="">
          <li className="inline-block w-[50%] mt-3 cursor-pointer">Life</li>
          <li className="inline-block w-[50%] mt-3 cursor-pointer">Music</li>
          <li className="inline-block w-[50%] mt-3 cursor-pointer">Style</li>
          <li className="inline-block w-[50%] mt-3 cursor-pointer">Sport</li>
          <li className="inline-block w-[50%] mt-3 cursor-pointer">Tech</li>
          <li className="inline-block w-[50%] mt-3 cursor-pointer">Cinema</li>
        </ul>
      </div>
      <div className="item item flex flex-col items-center mt-2">
        <span className="m-[10px] p-[5px] w-[80%] border-t-2 border-b-2 border-solid border-[#a7a4a4] font-varelaRound text-[12px] text-[#333] font-semibold">FOLLOW US</span>
        <div className="social mt-3 w-[250px] flex items-center justify-center">
        <i className="fa-brands fa-square-facebook text-[20px]  cursor-pointer"></i>
        <i className="fa-brands fa-square-pinterest text-[20px] cursor-pointer ml-3"></i>
        <i className="fa-brands fa-square-instagram text-[20px] cursor-pointer ml-3"></i>
        <i className="fa-brands fa-square-x-twitter text-[20px] cursor-pointer ml-3"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
