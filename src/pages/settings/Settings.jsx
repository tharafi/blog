import React from "react";
import Sidebar from "../../components/sidbar/Sidebar";

export default function Settings() {
  return (
    <div className="grid grid-cols-12 p-4">
      <div className="settings col-span-9">
        <div className="title flex items-center justify-between my-8">
          <span className="text-[30px] text-red-400">Update Your Account</span>
          <span className="text-[16px] text-red-400 cursor-pointer">Delete Account</span>
        </div>
        <form action="" className=" ">
        <label className="">Profile Picture</label>
        <div className="flex items-center pt-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1665311513813-8576a87a251f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[70px] h-[70px] rounded-[30px] object-cover"
          />
          <label htmlFor="fileInput" className="ml-6">
            <i className="fa-solid fa-user w-[25px] h-[25px] bg-red-400 rounded-full items-center flex text-white justify-center"></i>
          </label>
        </div>
          <input type="file" id="fileInput" style={{ display: "none" }} />
        </form>
        <form action="" className="flex flex-col pt-8">
          <label htmlFor="" className="text-[20px] mt-[20px]">Username</label>
          <input type="text" className="border-b-2 border-gray-200 text-gray-500 my-4 h-8 hover: outline-none"  placeholder="John Doe"/>
          <label htmlFor="" className="text-[20px] mt-[20px]">Email</label>
          <input type="email" className="border-b-2 border-gray-200 text-gray-500 my-4 h-8 hover: outline-nonehover: outline-none" placeholder="johnDoe@gmail.com"/>
          <label htmlFor="" className="text-[20px] mt-[20px]">Password</label>
          <input type="password" className="border-b-2 border-gray-200 text-gray-500 my-4 h-8 hover: outline-none" placeholder="*****"/>
        <button className="w-[150px] self-center text-white bg-teal-600 rounded-xl p-3 mt-5 cursor-pointer ">Update</button>
        </form>
      </div>
      <div className="col-span-3">
        <Sidebar />
      </div>
    </div>
  );
}
