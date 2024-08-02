import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login flex items-center justify-center flex-col relative'>
      <span className='text-[50px] font-lora'>Login</span>
      <form action="" className='flex flex-col mt-[20px] '>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Enter your email...' className='p-[10px] pr-[30px] bg-white mb-2 mt-2 border-none'/>
        <label htmlFor="">Password</label>
        <input type="password"placeholder='enter your password...'className='p-[10px] pr-[30px] mb-2 mt-2 bg-white border-none' />
        <button className='bg-red-400 cursor-pointer p-3 rounded-lg text-white mt-5'>Login</button>
        <button className='bg-teal-700 cursor-pointer p-3 rounded-lg text-white mt-5 absolute top-5 right-10'>Register</button>
      </form>
    </div>
  )
}
