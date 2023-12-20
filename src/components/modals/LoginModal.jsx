/* eslint-disable react/prop-types */
import React from 'react'

function LoginModal({ onClose, onRegisterClick }) {
  const handleRegisterClick = () => {
    onClose()
    onRegisterClick()
  }
  return (
    <div>
      <div
        id="authentication-modal"
        className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-300/70 p-4 md:inset-0">
        <div className="relative max-h-full w-full max-w-md">
          {/* Modal content */}
          <div className="relative z-50 rounded-lg bg-white">
            <button
              type="button"
              className="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center"
              data-modal-hide="authentication-modal"
              onClick={() => {
                onClose() // Call the onClose function to close the modal
              }}>
              <img src="/cancel.svg" alt="x" />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-black">Login in to Job Portal</h3>
              <form className="space-y-6" action="#">
                {/* Form inputs and submit button */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium  text-black">
                    Enter Email 
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-500 bg-white  p-2.5 text-sm text-black placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium  text-black">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-500 bg-white  p-2.5 text-sm text-black placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <a href="#" className="text-sm text-pink-500 hover:underline">
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg  bg-pink-400 px-5 py-2.5 text-center text-sm font-medium  text-white hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-800">
                  Login to your Account
                </button>
                <div className="text-sm font-medium text-gray-500">
                  Not registered?{' '}
                  <a
                    href="#"
                    className="text-pink-500 hover:underline"
                    onClick={handleRegisterClick}>
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
