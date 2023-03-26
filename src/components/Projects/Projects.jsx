import { React } from "react";
import Project1 from "../../Images/Project1.jpeg";
import Project2 from "../../Images/Project2.jpeg";
import Explore from "../Explore/Explore";
import GearBox from "../../Images/gearbox2.jpg";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-lg text-white font-display mb-4 relative after:absolute after:w-[100%] after:h-[3px] after:bg-white after:bottom-0 after:left-[0px] after:m-auto pb-1 ">
          Explore recent Works
        </span>
        <h1 className="sm:text-5xl text-white text-4xl font-head mt-5 mb-10">
          Featured Projects
        </h1>
        <div className="flex justify-between font-display w-full flex-wrap gap-5 p-4 mb-10">
          <div className="items bg-white flex justify-between flex-col lg:h-full w-[300px] shadow-lg shadow-black sm:p-7 p-4 hover:text-sky-600 transition-colors delay-100 ease-in flex-grow border-2 gap-4 rounded-md">
            <img
              src={Project1}
              alt=""
              className="hover:scale-105 w-full mx-auto transition-all ease-in h-[250px]"
            />
            <h1 className="text-2xl font-bold font-head">
              Piller set for forging dies
            </h1>
            <Explore />
          </div>
          <div className="items bg-white flex justify-between flex-col lg:h-full w-[300px] shadow-lg shadow-black sm:p-7 p-4 hover:text-sky-600 transition-colors delay-100 ease-in flex-grow border-2 gap-4 rounded-md">
            <img
              src={Project2}
              alt=""
              className="hover:scale-105 w-full mx-auto transition-all ease-in h-[250px]"
            />
            <h1 className="text-2xl font-bold font-head">
              Conveyor rollers(PU COATED)
            </h1>
            <Explore />
          </div>
          <div className="items bg-white flex justify-between flex-col lg:h-full w-[300px] shadow-lg shadow-black sm:p-7 p-4 hover:text-sky-600 transition-colors delay-100 ease-in flex-grow border-2 gap-4 rounded-md">
            <img
              src={GearBox}
              alt=""
              className="hover:scale-105 w-full h-[250px] mx-auto transition-all ease-in"
            />
            <h1 className="text-2xl font-bold font-head">Gear Box Assembly</h1>
            <Explore />
          </div>
        </div>
      </div>
    </>
  );
}
