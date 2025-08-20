import React from 'react'
import profileImg from '../assets/profile_img_2.png';

const Account = () => {
    return (
        <div className='flex flex-col w-[370px] h-screen bg-[#F7F8F9]shadow-md rounded-lg'>
            <div className='bg-white w-full p-8 mt-2'>
                <h1 className='text-2xl font-semibold'>Account Settings</h1>
            </div>
            <div className='flex mt-5'>
                <img className='w-20 h-20 rounded-full mx-5' src={profileImg} alt="" />
                <div className='flex flex-col justify-center mb-auto'>
                    <h1 className='font-semibold text-lg'>Marry Doe</h1>
                    <p className=''>Marry@Gmail.Com</p>
                </div>
            </div>
            <div className='p-5 border-b border-dotted border-[#CBCBCB]'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, expedita rerum vel provident pariatur eius odio? Ex aut eius minima enim</p>
            </div>
        </div>
    )
}

export default Account
