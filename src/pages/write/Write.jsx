import React from "react";

export default function Write() {
  return (
    <div className="write pt-[50px] ">
      <img
        src="https://plus.unsplash.com/premium_photo-1665311513813-8576a87a251f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-[70vw] h-[300px] ml-[150px] object-cover rounded-2xl" 
      />
      <form className="ml-[150px] relative">
        <div className="input  flex items-center">
          <label htmlFor="fileInput" className="  ">
            <i className="cursor-pointer border-2 rounded-full border-gray-600 w-[30px] h-[30px] fa-solid fa-plus flex items-center justify-center text-[20px] text-gray-600"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            className=""
          />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="hover: outline-none text-[30px] p-[20px] border-none w-[70vw]"
          />
        </div>
        <div className="input">
          <textarea
            placeholder="Tell your Story..."
            className="hover: outline-none text-[20px] p-[20px] border-none w-[70vw] h-[100vh]"
          ></textarea>
        </div>
        <button className="p-3 bg-teal-600 text-white text-[16px] rounded-md absolute top-[20px] right-[50px] border-none cursor-pointer">
          Publish
        </button>
      </form>
    </div>
  );
}
