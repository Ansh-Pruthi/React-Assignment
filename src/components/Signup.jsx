import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [fullName, setFullName] = useState("")
  const [phNumber, setPhNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [company, setCompany] = useState("")
  const [selectedOption, setSelectedOption] = useState('yes');

  const isEnabled = email.length > 0 && password.length > 0 && fullName.length > 0 && phNumber.length > 0;

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen items-end justify-center'>
      <div className='flex flex-col w-[350px] h-screen bg-[#F7F8F9]shadow-md rounded-lg p-5'>
        <div className='my-5'>
          <h1 className='text-2xl font-semibold'>Create your <br />PopX account</h1>
        </div>
        <div>
          <h2 className='text-sm text-[#8E59FD] font-semibold px-3 bg-[#F7F8F9]'>Full Name<span className='text-red-600'>*</span></h2>
          <input
            className='w-full p-2 px-3 outline-none border-2 rounded-md border-[#94979A] mb-4'
            onChange={(e) => setFullName(e.target.value)}
            type="password"
            placeholder='Enter password'
            value={fullName} />
          <h2 className='text-sm text-[#8E59FD] font-semibold px-3 bg-[#F7F8F9]'>Phone number<span className='text-red-600'>*</span></h2>
          <input
            className='w-full p-2 px-3 outline-none border-2 rounded-md border-[#94979A] mb-4'
            onChange={(e) => setPhNumber(e.target.value)}
            type="password"
            placeholder='Enter password'
            value={phNumber} />
          <h2 className='text-sm text-[#8E59FD] font-semibold px-3 bg-[#F7F8F9]'>Email address<span className='text-red-600'>*</span></h2>
          <input
            className='w-full p-2 px-3 outline-none border-2 rounded-md border-[#94979A] mb-4'
            onChange={(e) => setEmail(e.target.value)}
            type="password"
            placeholder='Enter password'
            value={email} />
          <h2 className='text-sm text-[#8E59FD] font-semibold px-3 bg-[#F7F8F9]'>Password<span className='text-red-600'>*</span></h2>
          <input
            className='w-full p-2 px-3 outline-none border-2 rounded-md border-[#94979A] mb-4'
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Enter password'
            value={password} />
          <h2 className='text-sm text-[#8E59FD] font-semibold px-3 bg-[#F7F8F9]'>Company name</h2>
          <input
            className='w-full p-2 px-3 outline-none border-2 rounded-md border-[#94979A] mb-4'
            onChange={(e) => setCompany(e.target.value)}
            type="password"
            placeholder='Enter password'
            value={company} />
          <h2 className='text-sm font-semibold bg-[#F7F8F9]'>Are you an Agency?<span className='text-red-600'>*</span></h2>
          <div className="flex space-x-8 items-center">
            <div className="flex items-center">
              <input
                type="radio"
                id="yes"
                name="option"
                value="yes"
                checked={selectedOption === 'yes'}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-[#6C25FF] border-[#6C25FF] ring-0 focus:ring-0 focus:ring-offset-0"
              />
              <label htmlFor="yes" className="ml-2 text-gray-700">Yes</label>
            </div>

            {/* Radio button for 'No' */}
            <div className="flex items-center">
              <input
                type="radio"
                id="no"
                name="option"
                value="no"
                checked={selectedOption === 'no'}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-[#6C25FF] border-[#6C25FF] ring-0 focus:ring-0 focus:ring-offset-0"
              />
              <label htmlFor="no" className="ml-2 text-gray-700">No</label>
            </div>
          </div>
          <Link to='/account' className={`text-white bg-[#6C25FF] w-full mt-6 text-center p-3 font-semibold rounded-md ${isEnabled ? 'bg-[#6C25FF]' : 'bg-[#CBCBCB]'} outline-none block`} disabled={!isEnabled} onClick={handleSubmit}>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
