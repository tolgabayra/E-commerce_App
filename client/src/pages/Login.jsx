import React from 'react'

export default function Login() {
  return (
    <div>
      <div class="w-screen h-screen flex justify-center items-center bg-white">
        <form class="p-14 bg-purple-50 rounded-xl flex justify-center items-center flex-col shadow-md">
        
          <p class="mb-5 text-3xl uppercase text-gray-600">Log In</p>
          <input type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs h-10 " />
          <input type="text" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs mt-3 h-10" />
          <button class="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80 mt-5" id="login" type="submit"><span>Login</span></button>
        </form>
      </div>
    </div>
  )
}
