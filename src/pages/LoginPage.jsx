import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {
  const [currState, setCurrState] = useState("Signup")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [isDataSubmitted, setIsDataSubmitted] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (currState === "Signup") {
      setIsDataSubmitted(true)
      console.log("Signing up with:", { fullName, email, password, bio })
    }

  }


  return (
    <div className="min-h-screen bg-cover bg-center  flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      {/*----------- LEFT */}
      <img src={assets.logo_zoro} alt="Logo" className="w-[min(30vw,250px)]" />

      {/*----------- RIGHT */}
      <form onSubmit={onSubmitHandler} className="w-[min(44vw,400px)]  border bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          {isDataSubmitted
            &&
            <img onClick={() => setIsDataSubmitted(false)} src={assets.arrow_icon} alt="Arrow" className="w-5 cursor-pointer" />
          }

        </h2>

        {currState === "Signup" && !isDataSubmitted && (
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
            placeholder="Full Name"
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:ring-2  focus:ring-indigo-500"
              placeholder="Password"
              required
            />
          </>
        )}

        {
          currState === "Signup" && isDataSubmitted && (
            <textarea rows={4} className='p-2 border border-gray-500 rounded-md focus:ring-2  focus:ring-indigo-500'
              placeholder='provide bio sir !'
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              required></textarea>
          )
        }

        <button type='submit' className='py-3 bg-gradient-to-r form-purple-400 to-violet-600
        text-white rounded-md cursor-pointer'>
          {currState === "Signup"
            ? !isDataSubmitted
              ? "Create Account"
              : "Finish Signup"
            : "Login"}
        </button>

        <div className='flex items-start gap-2 justify-center'>
          <input className='mt-2' type="checkbox" />
          <p>Agree to the terms of conditions .(obviously you won't read this just click ok)</p>
        </div>

        <div className='flex flex-col gap-2'>
          {currState === "Signup" ? (
            <p className='text-sm text-gray-600'>
              Already have an Account? <span onClick={() => { setCurrState('Login'), setIsDataSubmitted(false) }} className='font-medium text-violet-500 cursor-pointer'>Login</span>
            </p>
          ) : (
            <p className='text-sm text-gray-600'>
              Don't have an Account? <span onClick={() => { setCurrState('Signup'), setIsDataSubmitted(true) }} className='font-medium text-violet-500 cursor-pointer'>Signup</span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPage
