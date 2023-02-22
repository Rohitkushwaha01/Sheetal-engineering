import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Card() {
  return (
    <>
        <div className="flex justify-between font-display w-full flex-wrap gap-5">
            <div className="items flex justify-between flex-col h-[250px] w-[300px] shadow-xl p-7 hover:bg-black hover:text-sky-600 transition-colors dealy-400 ease-in flex-grow border-2">
                <h1 className='text-2xl'>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus ipsum, similique tenetur natus sint ex inventore blanditiis obcaecati voluptates.</p>
                <AiOutlineArrowRight />
            </div>
            <div className="items flex justify-between flex-col h-[250px] w-[300px] shadow-xl p-7 hover:bg-black hover:text-sky-600 transition-colors dealy-400 ease-in flex-grow border-2">
                <h1 className='text-2xl'>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus ipsum, similique tenetur natus sint ex inventore blanditiis obcaecati voluptates.</p>
                <AiOutlineArrowRight />
            </div>
            <div className="items flex justify-between flex-col h-[250px] w-[300px] shadow-xl p-7 hover:bg-black hover:text-sky-600 transition-colors dealy-400 ease-in flex-grow border-2">
                <h1 className='text-2xl'>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus ipsum, similique tenetur natus sint ex inventore blanditiis obcaecati voluptates.</p>
                <AiOutlineArrowRight />
            </div>
            <div className="items flex justify-between flex-col h-[250px] w-[300px] shadow-xl p-7 hover:bg-black hover:text-sky-600 transition-colors dealy-400 ease-in flex-grow border-2">
                <h1 className='text-2xl'>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus ipsum, similique tenetur natus sint ex inventore blanditiis obcaecati voluptates.</p>
                <AiOutlineArrowRight />
            </div>
        </div>
    </>
  )
}
