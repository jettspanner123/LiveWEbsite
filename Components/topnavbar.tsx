import React from "react";
import { motion } from "framer-motion";
const TopNavbar = () => {
  return (
    <div>
      <motion.nav
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{delay:1.1,bounce:0.1}}
        className="bg-white text-center uppercase font-bold py-5 text-2xl drop-shadow-lg font-Poppins cursor-pointer "
      >
        raen <span className="text-green-400">der</span> melaen
      </motion.nav>
    </div>
  );
};

export default TopNavbar;
