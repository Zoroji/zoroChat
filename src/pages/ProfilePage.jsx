import React, { useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from "react-router-dom"; 

const ProfilePage = () => {

const [selectedImage, setSelectedImage] = useState(null)
const navigate = useNavigate()
const [name,setName] = useState("King Zoro")
const [bio, setBio] = useState("The Pirate King is on Zoro Chat")

const handleSubmit = (e) => {
  e.preventDefault()  
  navigate("/")
}

  return (
    <div className='min-h-screen bg-cover bg-center  flex justify-center items-center'>
    <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 
    border-grey-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
      <h3 className='text-lg '>Profile Details</h3>
      <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
        <input onChange={(e)=>setSelectedImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
        <img className={`w-12 h-12 ${selectedImage && 'rounded-full'}`}
         src={selectedImage ? URL.createObjectURL(selectedImage) : assets.avatar_icon} alt="" />
        Upload Your Avatar 
      </label>
      <input
      value={name}
      onChange={(e) => setName(e.target.value)}
       className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
       type="text" required placeholder='Your Name'/>
      <textarea 
      className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
       required
       rows={4}
       value={bio}
       onChange={(e) => setBio(e.target.value)}
       placeholder='Your Bio'></textarea>
      <button
      className='bg-gradient-to-r from-green-600 to-green-300 text-white py-2 rounded-full hover:opacity-90 transition-opacity duration-300 text-lg cursor-pointer'
       type='submit'>सहेजें</button>
    </form>
    <img
    className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10'
     src={assets.logo_icon} 
     alt="" />
    </div>
   </div>
  )
}

export default ProfilePage