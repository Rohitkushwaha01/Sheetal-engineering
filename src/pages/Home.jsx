import React from "react";
import FrontImage from "../components/Images/engineer.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Card from "../components/Cards/Card";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <>
      <section className="flex" id="section-1">
        <img
          src={FrontImage}
          alt=""
          className="absolute z-0 opacity-90 h-[600px] w-full object-cover"
        />
        <div className="flex flex-wrap justify-between sm:mx-10 m-4 font-display z-10 relative h-[450px] items-center sm:mt-aut0 mt-[50px] mb-28">
          <div className="company-des w-[60%] sm:p-4 flex-grow">
            <div className="flex flex-col justify-between lg:h-[15rem] h-auto text-white">
              <h1 className="sm:text-7xl text-4xl sm:w-[350px] mb-6 font-bold">
                Effective & Reliable
              </h1>
              <p className="sm:text-xl text-lg sm:w-[600px] w-full xl:w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                harum fugit enim hic. Est in fuga, iste a ipsam distinctio,
                quisquam suscipit accusantium dolor, deleniti esse nulla animi
                quis hic.
              </p>
              <button className="mt-6 w-[125px] bg-black hover:bg-blue-700 text-blue-600 hover:text-black hover:font-bold py-2 px-4 rounded ">
                Our Services
              </button>
            </div>
          </div>
          <div className="lg:w-[400px] xl:flex hidden md:mt-[80px] sm:w-[60%] w-[100%] mx-auto mt-[140px] p-[20px] shadow-2xl shadow-black bg-white rounded-md">
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-2xl w-[254px] mb-6 font-bold">Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                harum fugit enim hic. Est in fuga, iste a ipsam distinctio,
                quisquam suscipit accusantium dolor, deleniti esse nulla animi
                quis hic.
              </p>
              <button className="flex justify-between items-center mt-6 w-[120px] bg-black hover:bg-blue-700 text-blue-600 hover:text-black hover:font-bold py-2 px-4 rounded ">
                Explore
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex bg-white text-black relative w-full p-[3rem] " id="section-2">
        <Card/>
      </section>

      <section className="flex p-[3rem] bg-sky-600 w-full" id="section-3">
        <Projects/>
      </section>
    </>
  );
}
