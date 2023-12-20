/* eslint-disable react/prop-types */
import React, { useState } from 'react'
function RegisterModal({ onClose, onLoginClick }) {
  const handleLoginClick = () => {
    onClose() // Close the LoginModal
    onLoginClick() // Open the RegisterModal
  }

  const [email, setemail] = useState()
  const [userName, setuserName] = useState()
  const [password, setpassword] = useState()
  const [reEnterPassword, setreEnterPassword] = useState()

  const obj = { userName, email, password, reEnterPassword }
  console.log(import.meta.env.VITE_REACT_APP)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let postuserInfo = await fetch(`${import.meta.env.VITE_REACT_APP}/register/user`, {
      method: 'post',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    postuserInfo = await postuserInfo.json()
    localStorage.setItem('user', JSON.stringify(postuserInfo.newUser))
    localStorage.setItem('token', JSON.stringify(postuserInfo.Token))
    if (postuserInfo.Token) {
      alert('register successfully !')
    } else {
      alert(postuserInfo.msg)
    }
  }

  return (
    <div
      id="authentication-modal"
      className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-300/70 p-4  md:inset-0">
      <div className="relative max-h-full w-full max-w-md">
        {/* Modal content */}
        <div className="relative z-50 rounded-lg bg-white shadow">
          <button
            type="button"
            className="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-500 bg-transparent text-sm text-black  hover:bg-white hover:text-black"
            data-modal-hide="authentication-modal"
            onClick={() => {
              onClose() // Call the onClose function to close the modal
            }}>
            <img src="/cancel.svg" alt="x" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium  text-black">Register to Job Portal</h3>

            <form onSubmit={handleSubmit} className="space-y-6" action="#">
              {/* Form inputs and submit button */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium  text-black">
                  Enter Email
                </label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border  border-gray-500 bg-white  p-2.5 text-sm text-black placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="text" className="mb-2 block text-sm font-medium  text-black">
                  Name
                </label>
                <input
                  onChange={(e) => setuserName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-lg border  border-gray-500 bg-white  p-2.5 text-sm text-black placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium  text-black">
                  Enter Password
                </label>
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border  border-gray-500 bg-white  p-2.5 text-sm text-black placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium  text-black">
                  Re-Enter Your Password
                </label>
                <input
                  onChange={(e) => setreEnterPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border  border-gray-500 bg-white  p-2.5 text-sm text-black placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg  bg-pink-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-800">
                Register Your Account
              </button>
              <div className="text-sm font-medium text-neutral-500">
                Already have an account?{' '}
                <a href="#" className=" text-pink-500 hover:underline" onClick={handleLoginClick}>
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterModal
