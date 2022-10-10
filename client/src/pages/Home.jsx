import React from 'react'
import Footer from '../components/home/Footer'
import { FaCartPlus } from "react-icons/fa"
import Sproduct from '../components/home/Sproduct'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className='bg-indigo-50'>


            <div class="p-12 flex flex-wrap items-center justify-center pr-12">

                <div class="flex justify-center items-center">
                    <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                        <div class="flex flex-col jusitfy-center items-center space-y-10">
                            <div class="flex flex-col justify-center items-center ">
                                <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-8 w-full">
                                <div class="relative group flex justify-center items-center h-full w-full">
                                    <img class="object-center object-cover h-full w-full" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="girl-image" />
                                    <Link to="/categories/women" class="hover:bg-slate-200 duration-300 bottom-4 text-center absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</Link>
                                </div>

                                <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                    <div class="relative group flex justify-center items-center h-full w-full">
                                        <img class="object-center object-cover h-full w-full" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image" />
                                        <Link to="/categories/shoes" class="hover:bg-slate-200 duration-300 bottom-4 text-center absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Shoes</Link>
                                    </div>
                                    <div class="relative group flex justify-center items-center h-full w-full">
                                        <img class="object-center object-cover h-full w-full" src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="watch-image" />
                                        <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Watches</button>
                                    </div>
                                </div>

                                <div class="relative group justify-center items-center h-full w-full hidden lg:flex">
                                    <img class="object-center object-cover h-full w-full" src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="girl-image" />
                                    <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                                    <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                                </div>
                                <div class="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                                    <img class="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" />
                                    <img class="object-center object-cover h-full w-full md:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                                    <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                                    <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                                </div>
                            </div>
                            <div class="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                                <img class="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" />
                                <img class="object-center object-cover h-full w-full sm:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="py-20 bg-white">
                <div class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div class="flex flex-wrap items-center -mx-3">
                        <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div class="w-full lg:max-w-md">
                                <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">We serve you with suitable and quality products</h2>
                                <ul>

                                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                        <span class="font-medium text-gray-500">Great products at affordable prices</span>
                                    </li>
                                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                        <span class="font-medium text-gray-500">Protection and security shopping</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img class="mx-auto sm:max-w-sm lg:max-w-full" src="https://img.freepik.com/free-photo/portrait-young-happy-girl-holding-shopping-bags_171337-2608.jpg?w=740&t=st=1665306800~exp=1665307400~hmac=f4756dd8e65e49c0932076ce183089eb75fb4be1cbaeb0fc6b7c081a56eeed9c" alt="feature image" /></div>
                    </div>
                </div>
            </section>


      







            <Footer />


        </div>
    )
}
