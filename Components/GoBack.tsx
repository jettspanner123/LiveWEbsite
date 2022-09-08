import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from 'next/link'
import {motion} from 'framer-motion'
const GoBackButton = (props) => {
  return (
    <Link href="/">
        <motion.button 
        animate={{x:0}}
        initial={{x:50}}
        exit={{x:-50}}
        className="bg-green-400 fixed bottom-0 right-0 text-white drop-shadow-lg uppercase gap-2 font-bold py-6 px-7 rounded-[0.7rem] m-5 flex z-50">
          <BiLeftArrowAlt size={25} fontWeight="bold" />
          <span className="hidden md:block">{props.name}</span>
        </motion.button>
    </Link>
  );
};

export default GoBackButton;
