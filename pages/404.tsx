import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const NotFound = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-[1240px] mx-auto text-center">
        <h1 className="text-[15rem] font-Poppins font-bold mt-[10rem] drop-shadow-lg  h-[18.5rem] ">
          4<span className="text-green-400">0</span>4
        </h1>
        <hr className="w-[3.5rem] mx-auto mt-3 border-[3px] rounded-full border-black" />
        <p className="text-xl font-bold mt-[4rem] drop-shadow-lg">
          THE PAGE YOU ARE TRYING TO REACH IS NOT FOUND!
        </p>
        <p className="text-xl font-bold mt-[1rem] drop-shadow-lg ">
          TRY GOING TO THE HOMEPAGE INSTEAD:{" "}
        </p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-green-400 py-5 px-[3rem] drop-shadow-lg text-white font-bold rounded-lg mt-10"
          >
            HOME
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
