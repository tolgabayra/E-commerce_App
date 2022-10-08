import React from 'react'

export default function Sproduct() {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:shadow-xl hover:translate-y-1 transition duration-300">
                <figure className="mb-2">
                    <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="" className="h-64 ml-auto mr-auto" />
                </figure>
                <div className="rounded-lg p-4 bg-purple-500 flex flex-col">
                    <div>
                        <h5 className="text-white text-2xl font-bold leading-none">
                            iPhone 11
                        </h5>
                        <span className="text-xs text-gray-400 leading-none">Just the right amount of everything.</span>
                    </div>
                    <div className="flex items-center">
                        <div className="text-lg text-white font-light">
                            $699,00
                        </div>
                        <button href="javascript:;" className="rounded-full bg-purple-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="stroke-current m-auto">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
