import React from "react";
import Frame from "./Frame";

export default function Main() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full text-gray-900">
        <span className="text-lg text-center text-white font-display mb-4 relative after:absolute after:w-[100%] after:h-[3px] after:bg-white after:bottom-0 after:left-[0px] after:m-auto pb-1 ">
          See what our Client says
        </span>
        <h1 className="sm:text-5xl text-4xl font-head mt-5 mb-10 text-white">Testimonials</h1>
      </div>
      <Frame />
    </>
  );
}
