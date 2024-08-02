import React from "react";

export default function Header() {
  return (
    <div>
      <div className="mt-[60px]">
        <div className="flex flex-col items-center font-lora  text-gray-600">
          <span className=" top-[13%] absolute text-[20px]">React & Node</span>
          <span className="top-[15%] absolute text-[100px]">Blog</span>
        </div>
        <img
          className="h-[450px] w-[100%] mt-[80px] object-cover"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
    </div>
  );
}
