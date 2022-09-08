import React from "react";
import { motion } from "framer-motion";
import { BsFacebook, BsInstagram, BsWindowSidebar } from "react-icons/bs";
import { AiFillHome, AiOutlineContacts } from "react-icons/ai";
import { MdHome, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import Link from "next/link";
const facebookHandler = () => {
  window.open("https://www.facebook.com/");
};
const isntagramHandler = () => {
  window.open("https://www.instagram.com/");
};
const SideNavbar = () => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -200 }}
      transition={{ bounce: 0.4,delay:0.5}}
      className="hidden w-[16rem] h-[100vh] text-center bg-white drop-shadow-xl md:block "
    >
      <ul className="font-Poppins text-[1.1rem] w-[90%] mx-auto ">
        <li className="flex text-center py-5 rounded-lg gap-6 cursor-pointer hover:bg-green-400 hover:font-bold hover:text-white transition-all duration-200 hover:drop-shadow-lg">
          <Link href="/">
            <div className="flex gap-6 font-semibold">
              <MdHome size={40} className="ml-[2.3rem] " />
              <p className="mt-[0.5rem]">- HOME -</p>
            </div>
          </Link>
        </li>
        <li className="flex text-center gap-6 py-4 rounded-lg cursor-pointer hover:font-bold hover:bg-green-400 hover:text-white transition-all duration-200 hover:drop-shadow-lg">
          <Link href="/products">
            <div className="flex gap-6 font-semibold">
              <MdOutlineProductionQuantityLimits
                size={40}
                className="ml-[2.3rem] "
              />
              <p className="mt-[0.5rem]">PRODUCTS</p>
            </div>
          </Link>
        </li>
        <li className="flex text-center gap-6 py-4 rounded-lg cursor-pointer hover:font-bold hover:bg-green-400 hover:text-white transition-all duration-200 hover:drop-shadow-lg">
          <Link href="/requests">
            <div className="flex gap-6 font-semibold">
              <BsChatSquareQuoteFill size={40} className="ml-[2.3rem] " />
              <p className="mt-[0.5rem]">REQUESTS</p>
            </div>
          </Link>
        </li>
        <li className="flex text-center gap-6 py-5 rounded-lg cursor-pointer hover:font-bold hover:bg-green-400 hover:text-white transition-all duration-200 hover:drop-shadow-lg">
          <Link href="/contacts">
            <div className="flex gap-6 font-semibold">
              <AiOutlineContacts size={40} className="ml-[2.3rem] " />
              <p className="mt-[0.5rem]">CONTACTS</p>
            </div>
          </Link>
        </li>
      </ul>
      <hr className="w-[90%] mx-auto border border-green-400 mt-10" />
      <ul className="text-center mt-10">
        <li className="py-6 flex gap-6  hover:bg-blue-600 cursor-pointer hover:text-white w-[90%] mx-auto rounded-lg transition-all duration-200 hover:font-bold">
          <BsFacebook size={40} className="ml-[2rem]" />
          <p className="font-Poppins font-semibold  text-lg mt-[0.3rem]">
            FACEBOOK
          </p>
        </li>
        <li className="py-6 flex gap-6 hover:bg-pink-500 cursor-pointer hover:text-white w-[90%] mx-auto rounded-lg transition-all duration-200 hover:font-bold">
          <BsInstagram size={40} className="ml-[2rem]" />
          <p className="font-Poppins font-semibold text-lg mt-[0.3rem]">
            INSTAGRAM
          </p>
        </li>
      </ul>
      <hr className="w-[90%] mx-auto border border-green-400 mt-10" />
      <motion.button
        whileHover={{
          scale: 0.95,
        }}
        className="font-Poppins text-[1.2rem] bg-green-400 text-white w-[85%] mt-10 py-6 font-bold rounded-lg"
      >
        LOGIN
      </motion.button>
      <Link href="/notes">
        <motion.button
          whileHover={{
            scale: 0.95,
          }}
          className="font-Poppins text-[1.2rem]  text-white bg-red-500  w-[85%] mt-10 py-6 font-bold rounded-lg"
        >
          NOTES
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default SideNavbar;
