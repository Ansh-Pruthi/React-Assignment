import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='flex h-screen items-end justify-center bg-white'>
      <div className='flex flex-col w-[350px] h-screen bg-[#F7F8F9]shadow-md rounded-lg p-5'>
        <div className="flex flex-col gap-2 mt-auto">

          {/* text section */}
          <div className='mb-4 w-72 text-left mt-auto'>
            <h1 className='text-xl font-semibold text-gray-900'>Welcome to PopX</h1>
            <p className="text-sm text-gray-500 mt-2 w-52">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>

          {/* button section */}
          <div className='flex flex-col gap-2 items-center mt-auto mb-4'>
            <Link to='/signup' className='bg-[#6C25FF] text-center text-sm text-white font-semibold w-[310px] p-2 rounded-md'>
              Create Account
            </Link>
            <Link to='/login' className='bg-[#CEBAFB] text-sm text-center text-[#1D2226] font-semibold w-[310px] p-2 rounded-md'>
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
