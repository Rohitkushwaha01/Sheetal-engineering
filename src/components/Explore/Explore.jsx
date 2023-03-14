import {Link} from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import React from 'react'

export default function Explore() {
  return (
    <Link to="/product">
        <button className="flex justify-between items-center w-[120px] bg-black hover:bg-blue-700 text-blue-600 hover:text-black hover:font-bold py-2 px-4 rounded shadow-xl">
            Explore
            <AiOutlineArrowRight />
        </button>
    </Link>
  )
}
