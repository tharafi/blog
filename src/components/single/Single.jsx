import React from "react";

const Single = () => {
  return (
    <div className="single p-[20px] pr-0">
      <img
        src="https://plus.unsplash.com/premium_photo-1665311513813-8576a87a251f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-[300px] w-[100%] object-cover rounded-md"
      />
      <div className="text ">
        <h1 className="title  text-center font-lora font-semibold text-[28px] my-3">
          Personal Service - Personal Relationships
          <div className="edit float-right text-[18px] mr-2 ">
            <i className="fa-solid fa-pen-to-square mr-3 text-green-600 cursor-pointer"></i>
            <i className="fa-solid fa-trash text-red-600 cursor-pointer"></i>
          </div>
        </h1>
        <div className="author flex justify-between items-center my-3 text-[#b39656] font-varelaRound">
          <h1 className="text-[16px] font-semibold">Author: JOHN DOE</h1>
          <span className="text-[16px] font-semibold">1 hour ago</span>
        </div>
        <p className="text-[18px] text-[#333] leading-6 first-letter:ml-[20px] first-letter:text-[30px] first-letter: font-semibold font-lora">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          magnam hic tempore ex neque sit possimus soluta cum id nostrum ullam,
          reprehenderit fuga sed inventore beatae iusto voluptates, in corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et ab
          quam earum, eos obcaecati veritatis quae tempora, cumque maiores omnis
          enim eum ratione nostrum, cum vitae deserunt expedita dolorem? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quis eum impedit
          hic eveniet, voluptatum harum amet, perspiciatis necessitatibus vero,
          dolore laudantium ea. Et, perspiciatis cumque aspernatur neque sit
          recusandae possimus.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          magnam hic tempore ex neque sit possimus soluta cum id nostrum ullam,
          reprehenderit fuga sed inventore beatae iusto voluptates, in corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et ab
          quam earum, eos obcaecati veritatis quae tempora, cumque maiores omnis
          enim eum ratione nostrum, cum vitae deserunt expedita dolorem? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quis eum impedit
          hic eveniet, voluptatum harum amet, perspiciatis necessitatibus vero,
          dolore laudantium ea. Et, perspiciatis cumque aspernatur neque sit
          recusandae possimus.
        </p>
      </div>
    </div>
  );
};

export default Single;
