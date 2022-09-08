import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const ClickHandlerOne = () => {
  window.open();
};
const Card = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -30 }}
      transition={{ bounce: 0.4, stiffness: 10 }}
      className="w-[20rem] h-[25rem] bg-white rounded-lg overflow-hidden drop-shadow-lg mt-[2rem]"
    >
      <div className="h-[20.5rem] bg-pink-300 hover:scale-110 transition-all duration-500">
        <Image
          alt="There should have been an image here!"
          src={props.img}
          objectFit="fill"
          width={320}
          height={329}
        />
      </div>
      <div
        onClick={ClickHandlerOne}
        className="relative w-full  py-[1.5rem] text-white bg-green-400 font-bold cursor-pointer uppercase hover:bg-white  hover:text-green-400 transition-colors duration-300"
      >
        Explore
      </div>
    </motion.div>
  );
};

export default Card;
