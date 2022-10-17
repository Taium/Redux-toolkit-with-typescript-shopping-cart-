import React from 'react';
import { useDispatch } from "react-redux";
import { cartDecrement, cartIncrement } from '../../redux/cart/actions';
import { productDecrement, productIncrement } from '../../redux/product/actions';
import {increment,decrement} from '../../redux/product/productSlice';
import {cincrement,cdecrement} from '../../redux/cart/cartSlice';

type propsproduct = {
    id: number,
    title: string,
    price: number,
    available_qty?: number,
    total_qty?: number,
}
interface UserProps {
    product: propsproduct,
  }
export default function CartProduct({product}:UserProps) {
    const dispatch = useDispatch();
    const {id, title, total_qty,available_qty} = product;

    const incrementHandler = (productId:number) =>{
        dispatch(decrement(productId));
        dispatch(cincrement(product));
    }

    const decrementHandler = (productId:number) =>{
        dispatch(increment(productId));
        dispatch(cdecrement(product));
    }

    return (
        <div className="flex justify-between border-b-2 mb-2">
            <div className="text-lg py-2">
                <p>{title}</p>
            </div>
            { id >0 &&
            <div className="text-lg py-2">
                <div
                    className="flex flex-row space-x-2 w-full items-center rounded-lg"
                >
                    <button
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                        onClick={()=>decrementHandler(id)}
                        // disabled={available_qty === total_qty}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M18 12H6"
                            />
                        </svg>
                    </button>
                    <p>{total_qty}</p>
                    <button
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center cursor-pointer"
                        onClick={()=>incrementHandler(id)}
                        disabled={available_qty === total_qty}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            }
        </div>
    )
}
