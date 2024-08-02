import React from "react";

const TopBar = () => {
  return (
    <div className="topbar w-[100] h-[50px] bg-white flex items-center justify-around sticky top-0 z-10">
      <div className="left flex justify-center items-center">
        <i className="fa-brands fa-square-facebook text-[20px]  cursor-pointer"></i>
        <i className="fa-brands fa-square-pinterest text-[20px] ml-3 cursor-pointer"></i>
        <i className="fa-brands fa-square-instagram text-[20px] ml-3 cursor-pointer"></i>
        <i className="fa-brands fa-square-x-twitter text-[20px] ml-3 cursor-pointer"></i>
      </div>
      <div className="center">
        <ul className="flex justify-center items-center">
          <li className="font-light mr-5 text-[18px] font-josefin cursor-pointer">
            HOME
          </li>
          <li className="font-light mr-5 text-[18px] font-josefin cursor-pointer">
            ABOUT
          </li>
          <li className="font-light mr-5 text-[18px] font-josefin cursor-pointer">
            CONTACT
          </li>
          <li className="font-light mr-5 text-[18px] font-josefin cursor-pointer">
            WRITE
          </li>
          <li className="font-light mr-5 text-[18px] font-josefin cursor-pointer">
            LOGOUT
          </li>
        </ul>
      </div>
      <div className="right flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer"
        />
        <i className="fa-solid fa-magnifying-glass text-[20px] ml-3 cursor-pointer text-gray-600 "></i>
      </div>
    </div>
  );
};

export default TopBar;
