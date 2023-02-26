import React from "react";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="sm:px-14 p-2 bg-gray-900 text-white font-display relative">
        <div className="flex flex-wrap sm:flex-row items-start flex-col sm:justify-between w-full gap-2 py-5">
          <div className="flex flex-col justify-between items-start h-[200px] flex-grow mb-10">
            <div className="flex items-center">
              <GoLocation className="w-[30px] font-bold text-5xl" />
              <address className="ml-6">
                54 / 17, D-II Block, M.I.D.C., Chinchwad, Pune - 411 019,
                Maharashtra, India.
              </address>
            </div>
            <div className="flex items-center w-full">
              <BiPhoneCall className="w-[30px] font-bold text-5xl" />
              <p className="ml-6">+91-9881084234</p>
            </div>
            <div className="flex items-center w-full">
              <AiOutlineMail className="w-[30px] font-bold text-5xl" />
              <p className="ml-6">sheetal@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start h-[180px] flex-grow mb-10">
            <div className="flex items-center">
              <h3 className="text-xl font-head mb-4 relative after:absolute after:w-[100%] after:h-[3px] after:bg-white after:bottom-0 after:left-[0px] after:m-auto pb-1">Quick Links</h3>
            </div>

            <Link to="/"> Home</Link>
            <Link to="/product"> Product</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
          </div>
          <div className="flex flex-col justify-between items-start h-[180px] flex-grow mb-10">
            <h1 className="text-2xl font-head mb-4 relative after:absolute after:w-[100%] after:h-[3px] after:bg-white after:bottom-0 after:left-[0px] after:m-auto pb-1">Products</h1>
            <p className="text-sm">Blow Moulded Plastic Parts</p>
            <p className="text-sm">Plastic Blow Moulding Parts</p>
            <p className="text-sm">Plastic Blow Moulding</p>
            <p className="text-sm">Injection Moulded Plastic Parts</p>
            <p className="text-sm">3D Blow Moulding</p>
          </div>
        </div>
        <div className="px-14 text-center border-t-2 py-10">
            <footer className="text-xl">
                &copy;Copyright All Rights Reserverd.
            </footer>
        </div>
      </div>
    </>
  );
}
