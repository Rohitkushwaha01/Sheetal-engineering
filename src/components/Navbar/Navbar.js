import { useState } from "react";
import { Link } from "react-router-dom";
import { HiXMark, HiBars3 } from "react-icons/hi2";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import Logo from "../../Images/Logo/logo.png";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const display = click ? "animated" : "navbar";

  return (
    <>
      <nav className={`sm:navbar lg:h-auto ${display} sm:p-4 bg-black p-2 text-sky-600 sticky top-0 z-50`}>
        <div className="flex justify-between sm:px-[2.1rem] font-display items-center lg:flex-row flex-col">
          <div className="flex justify-between items-center w-full mb-4 sm:mb-0 pb-4 lg:pb-0">
            <div className="logo sm:w-[19rem] flex items-center justify-around text-2xl ">
              <img src={Logo} alt="sheetal engineering Logo" className="w-8" />
              <h4 className="font-head text-3xl font-extrabold ">
                <Link to="/">Sheetal Engineering</Link>
              </h4>
            </div>

            <div className="text-4xl lg:hidden" onClick={handleClick}>
              {click ? <HiXMark /> : <HiBars3 />}
            </div>
          </div>
          <ul className="flex lg:flex-row lg:justify-between lg:w-[700px] lg:border-0 lg:py-0 w-full sm:text-xl text-[1rem] flex-col items-start justify-center gap-4 border-t-2 py-4 ">
            <li className="relative after:w-0 after:opacity-0 hover:after:absolute hover:after:w-[100%] hover:after:h-[3px] hover:after:bg-white hover:after:bottom-0 hover:after:left-[0px] hover:after:transition-all hover:after:ease-out hover:after:delay-200 hover:after:opacity-100 hover:after:m-auto">
              <Link
                to="/"
                className="hover:text-white flex justify-between items-center w-full"
              >
                <FaHome className="mr-2"/>
                Home
              </Link>
            </li>
            <li className="relative after:w-0 after:opacity-0 hover:after:absolute hover:after:w-[100%] hover:after:h-[3px] hover:after:bg-white hover:after:bottom-0 hover:after:left-[0px] hover:after:transition-all hover:after:ease-out hover:after:delay-200 hover:after:opacity-100 hover:after:m-auto">
              <Link
                to="/product"
                className="hover:text-white flex justify-between items-center w-full"
              >
                <AiOutlineProject className="mr-2"/>
                Products
              </Link>
            </li>
            <li className="relative after:w-0 after:opacity-0 hover:after:absolute hover:after:w-[100%] hover:after:h-[3px] hover:after:bg-white hover:after:bottom-0 hover:after:left-[0px] hover:after:transition-all hover:after:ease-out hover:after:delay-200 hover:after:opacity-100 hover:after:m-auto">
              <Link
                to="/contact"
                className="hover:text-white flex justify-between items-center w-full"
              >
                <FaUserAlt className="mr-2"/>
                Contact
              </Link>
            </li>
            <li className="relative after:w-0 after:opacity-0 hover:after:absolute hover:after:w-[100%] hover:after:h-[3px] hover:after:bg-white hover:after:bottom-0 hover:after:left-[0px] hover:after:transition-all hover:after:ease-out hover:after:delay-200 hover:after:opacity-100 hover:after:m-auto">
              <Link
                to="/about"
                className="hover:text-white flex justify-between items-center w-full"
              >
                <BiInfoCircle className="mr-2"/>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
