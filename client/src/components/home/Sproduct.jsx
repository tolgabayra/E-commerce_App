import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { appAxios } from "../../utils/productAxios"
import { useSelector, useDispatch } from "react-redux"
import { addProduct } from '../../features/basketSlice'

export default function Sproduct() {
    const [shoes, setShoes] = useState([])


    const dispatch = useDispatch()
    const products = useSelector((state) => state.basket.products)
    const quantity = useSelector((state) => state.basket.quantity)
    const total = useSelector((state) => state.basket.total)

    useEffect(() => {
        getShoes()
    }, [])

    useEffect(() => {
        console.log(products);
    }, [products])

    useEffect(() => {
        console.log(quantity);
    }, [quantity])


    useEffect(() => {
        console.log(total);
    }, [total])

    const getShoes = () => {
        appAxios.get("/api/v1/shoes")
            .then((res) => {
                console.log(res.data);
                setShoes(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }




    return (
        <>{shoes.map(res => (
            <div key={res} className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                <div className="bg-white rounded-lg m-h-64 p-2 transform hover:shadow-xl hover:translate-y-1 transition duration-300">
                    <figure className="mb-2">
                        <img crossorigin="anonymous" src={`http://localhost:8000${res.img}`} alt="" className="h-64 ml-auto mr-auto" />
                    </figure>
                    <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                        <div>
                            <h5 className="text-white text-2xl font-bold leading-none">
                                {res.title}
                            </h5>
                            <span className="text-xs text-yellow-100 leading-none">{res.desc}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="text-lg text-white font-light">
                                ${res.price}
                            </div>
                            <button onClick={() => dispatch(addProduct(res))} className="rounded-full bg-purple-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="stroke-current m-auto">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))

        }

        </>

    )
}
