import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import { motion } from "framer-motion";

export default function Explore() {
  return (
    <Link to="/product">
      <motion.button
        animate={{ scale: 1.2 }}
        transition={{ type: "spring", damping: 3 }}
        className="flex justify-between items-center w-[120px] bg-black hover:bg-blue-700 text-blue-600 hover:text-black hover:font-bold py-2 px-4 rounded shadow-xl ml-4"
      >
        Explore
        <AiOutlineArrowRight />
      </motion.button>
    </Link>
  );
}
