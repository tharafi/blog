import React from 'react'
import "./post.css"
const Post = () => {
  return (
    <div className='post w-[385px] mx-[25px] mt-0 mb-[45px] pt-8'>
        <img src="https://plus.unsplash.com/premium_photo-1665311513813-8576a87a251f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
        className=' w-[100%] h-[280px] object-cover rounded-md'/>
      <div className="text text-center mt-3"> 
        <span className='mr-2 font-varelaRound text-[#b29656] cursor-pointer'>Life</span>
        <span className='font-varelaRound text-[#b29656] cursor-pointer'>Sport</span>
        <div className="title text-[20px] font-josefin font-bold cursor-pointer mt-3">Personal Service - Personal Relationships</div>
        <span className='font-lora text-[13px] mt-4'>1 hour ago</span>
        <p className='poost font-varelaRound text-[15px] text-[#444] text-start mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius labore aut eos neque porro architecto magnam inventore necessitatibus quas? Deleniti vitae debitis at earum nihil illo itaque, eaque expedita? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quam reprehenderit aliquam voluptate maxime quis cumque, cum modi minima incidunt error laudantium laboriosam corporis. Adipisci totam corporis reprehenderit quae architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus aperiam quidem quaerat in eligendi fugit id dolores. Doloremque perferendis officia tempora ex, exercitationem error nesciunt dolores corrupti quibusdam vero vitae.</p>
      </div>
    </div>
  )
}

export default Post
