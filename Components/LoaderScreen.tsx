import React from "react";
import { motion } from "framer-motion";
const LoaderScreen = () => {
  return (
    <div>
      <motion.div
        animate={{ y: -1200 }}
        transition={{duration:1,delay:0.2}}
        className="w-screen absolute top-[5rem] drop-shadow-lg bg-green-400 rounded-b-[5rem] h-[110vh]"
      >
        yes
      </motion.div>
      <motion.div
        animate={{ y: -1200 }}
        transition={{duration:1}}
        className="w-screen absolute top-0 rounded-b-[5rem] drop-shadow-lg h-[110vh] bg-white"
      >
        yes
      </motion.div>
    </div>
  );
};

export default LoaderScreen;
