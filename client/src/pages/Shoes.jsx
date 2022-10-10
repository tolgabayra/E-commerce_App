import React from 'react'
import Sproduct from '../components/home/Sproduct'

export default function Shoes() {
    return (
        <div>
            <div className="flex items-center bg-indigo-50 w-screen min-h-screen">
                <div className="container ml-auto mr-auto flex flex-wrap items-start">
                    <div className="w-full pl-5 lg:pl-2 mb-4 mt-16">
                        <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
                            Shoes
                        </h1>
                    </div>
                    <Sproduct />
            
                </div>
            </div>
        </div>
    )
}
