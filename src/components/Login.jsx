import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const isEnabled = email.length > 0 && password.length > 0;

  const handleSubmit = () => {
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen items-end justify-center'>
      <div className='flex border-gray-500 flex-col w-[350px] h-screen bg-[#F7F8F9]shadow-md rounded-lg p-2 pt-7'>
        <div>
          <div>
            <h1 className='text-3xl text-black font-semibold mb-3'>Signin to your <br /> PopX account</h1>
            <p className='text-[#94979A] text-lg mb-4'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
          </div>
          <div>
            <h2 className='text-sm text-[#8E59FD] font-semibold px-3 bg-[#F7F8F9]'>Email Address</h2>
            <input
              className='w-full p-2 px-3 outline-none border-2 rounded-md border-[#94979A] mb-4'
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='Enter email address'
              value={email} />
            <h2 className='text-sm text-[#8E59FD] font-semibold px-3 bg-[#F7F8F9]'>Password</h2>
            <input
              className='w-full p-2 px-3 outline-none border-2 rounded-md border-[#94979A] mb-4'
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Enter password'
              value={password} />
          </div>
          <div className='w-full'>
            <Link to='/account' className={`text-white bg-[#6C25FF] w-full text-center p-3 font-semibold rounded-md ${isEnabled ? 'bg-[#6C25FF]' : 'bg-[#CBCBCB]'} outline-none block`} disabled={!isEnabled} onClick={handleSubmit}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
