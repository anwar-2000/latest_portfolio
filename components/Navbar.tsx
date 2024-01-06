"use client";
import { motion } from "framer-motion";

interface Props {}

const Navbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-end gap-6 bg-white px-12">
      <motion.h3 className="text-black text-lg cursor-pointer "
      initial={{opacity:0,y:-10}}
      transition={{duration : 0.4 , delay : 0.2}}
      viewport={{once:true}}
      whileInView={{opacity:1,y:0}}
      >
        Linkedin
      </motion.h3>
      <motion.h3 className="text-black text-lg cursor-pointer"
      initial={{opacity:0,y:-10}}
      transition={{duration : 0.4 , delay : 0.2}}
      viewport={{once:true}}
      whileInView={{opacity:1,y:0}}
      >
        Connect
      </motion.h3>
    </div>
  );
};

export default Navbar;
