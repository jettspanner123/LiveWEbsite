import React from "react";
import {motion} from 'framer-motion'
const Heading = (props) => {
  return (
    <motion.div 
    animate={{y:0}}
    initial={{y:-100}}
    className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-Ubuntu font-bold mt-10 ">
          {props.name}
        </h1>
        <hr className="w-[3.5rem] mx-auto mt-3 border-[3px] rounded-full border-green-400"/>
    </motion.div>
  );
};

export default Heading;
