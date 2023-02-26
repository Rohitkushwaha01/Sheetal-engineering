import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
// import Project1 from "../components/Images/Project1.jpeg"
import Project1 from "../../Images/Project1.jpeg"
import Project2 from "../../Images/Project2.jpeg"
import Project3 from "../../Images/Project3.jpeg"

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-lg font-display mb-4 relative after:absolute after:w-[100%] after:h-[3px] after:bg-white after:bottom-0 after:left-[0px] after:m-auto pb-1 ">
          Explore recent Works
        </span>
        <h1 className="sm:text-5xl text-4xl font-head mt-5 mb-10">Featured Projects</h1>
        <div className="flex justify-between font-display w-full flex-wrap gap-5 p-4 mb-10">
          <div className="items bg-white flex justify-between flex-col lg:h-full w-[300px] shadow-lg shadow-black sm:p-7 p-4 hover:text-sky-600 transition-colors delay-100 ease-in flex-grow border-2 gap-4 rounded-md">
            <img src={Project1} alt="" className="hover:scale-105 w-full mx-auto transition-all ease-in h-[250px]"/>
            <h1 className="text-2xl font-bold font-head">Project Heading 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              optio architecto, tempora, ut pariatur nobis aperiam fugit
              veritatis ipsum commodi corrupti nostrum. Alias odit quam autem,
              aperiam dolore odio cum!
            </p>
            <button className="flex justify-between items-center w-[120px] bg-black hover:bg-blue-700 text-blue-600 hover:text-black hover:font-bold py-2 px-4 rounded shadow-xl">
              Explore
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="items bg-white flex justify-between flex-col lg:h-full w-[300px] shadow-lg shadow-black sm:p-7 p-4 hover:text-sky-600 transition-colors delay-100 ease-in flex-grow border-2 gap-2 rounded-md">
            <img src={Project2} alt="" className="hover:scale-105 w-full mx-auto transition-all ease-in h-[250px]"/>
            <h1 className="text-2xl font-bold font-head">Project Heading 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              optio architecto, tempora, ut pariatur nobis aperiam fugit
              veritatis ipsum commodi corrupti nostrum. Alias odit quam autem,
              aperiam dolore odio cum!
            </p>
            <button className="flex justify-between items-center w-[120px] bg-black hover:bg-blue-700 text-blue-600 hover:text-black hover:font-bold py-2 px-4 rounded ">
              Explore
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="items bg-white flex justify-between flex-col lg:h-full w-[300px] shadow-lg shadow-black sm:p-7 p-4 hover:text-sky-600 transition-colors delay-100 ease-in flex-grow border-2 gap-2 rounded-md">
            <img src={Project3} alt="" className="hover:scale-105 w-full h-[250px] mx-auto transition-all ease-in"/>
            <h1 className="text-2xl font-bold font-head">Project Heading 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              optio architecto, tempora, ut pariatur nobis aperiam fugit
              veritatis ipsum commodi corrupti nostrum. Alias odit quam autem,
              aperiam dolore odio cum!
            </p>
            <button className="flex justify-between items-center w-[120px] bg-black hover:bg-blue-700 text-blue-600 hover:text-black hover:font-bold py-2 px-4 rounded ">
              Explore
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
