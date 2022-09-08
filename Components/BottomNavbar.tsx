import React from "react";
import { BsFacebook, BsInstagram, BsWindowSidebar } from "react-icons/bs";
import { AiFillHome, AiOutlineContacts } from "react-icons/ai";
import { MdHome, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const BottomNavbar = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: 50 }}
      transition={{ stiffness: 10, delay:0.5 }}
      className=" bg-green-400 absolute bottom-0 w-full"
    >
      <ul className="flex  md:hidden justify-around ">
        <li className="text-center p-5 rounded-lg gap-6  cursor-pointer text-white">
          <Link href="/">
            <MdHome size={40} className="" />
          </Link>
        </li>
        <li className="text-center p-5 rounded-lg gap-6  cursor-pointer bg-green-400 text-white">
          <Link href="/products">
            <MdOutlineProductionQuantityLimits size={40} className="" />
          </Link>
        </li>
        <li className="text-center p-5 rounded-lg gap-6  cursor-pointer text-white bg-green-400">
          <Link href="/requests">
            <BsChatSquareQuoteFill size={40} className="" />
          </Link>
        </li>
        <li className="text-center p-5 rounded-lg gap-6  bg-green-400 cursor-pointer text-white">
          <Link href="/contacts">
            <AiOutlineContacts size={40} className="" />
          </Link>
        </li>
      </ul>
      <button className="hidden text-black bg-white px-6 font-bold h-[90%] py-4 rounded-lg mr-5">
        Login
      </button>
    </motion.div>
  );
};

export default BottomNavbar;
