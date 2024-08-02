import React from 'react'
import "./register.css"

export default function Register() { 
  return (
    <div className='register flex items-center justify-center flex-col relative'>
      <span className='text-[50px] font-lora'>Register</span>
      <form action="" className='flex flex-col mt-[20px] '>
        <label htmlFor="">Username</label>
        <input type="username" placeholder='Enter your username...' className='p-[10px] pr-[30px] bg-white mb-2 mt-2 border-none'/>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Enter your email...' className='p-[10px] pr-[30px] bg-white mb-2 mt-2 border-none'/>
        <label htmlFor="">Password</label>
        <input type="password"placeholder='enter your password...'className='p-[10px] pr-[30px] mb-2 mt-2 bg-white border-none' />
        <button className='bg-teal-700  cursor-pointer p-3 rounded-lg text-white mt-5'>Register</button>
        <button className='bg-red-400 cursor-pointer p-3 rounded-lg text-white mt-5 absolute top-5 right-10'>Login</button>
      </form>
    </div>
  )
}
