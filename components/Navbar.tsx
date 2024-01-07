"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {}

const Navbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-end gap-6 bg-white px-12">
      <Link target="_blank" href="https://www.linkedin.com/in/khaled-khaouani/">
      <motion.h3 className="text-black text-lg cursor-pointer "
      initial={{opacity:0,y:-10}}
      transition={{duration : 0.4 , delay : 0.2}}
      viewport={{once:true}}
      whileInView={{opacity:1,y:0}}
      >
        Linkedin
      </motion.h3>
      </Link>
      <Link target="_blank" href="https://www.github.com/anwar-2000/">
      <motion.h3 className="text-black text-lg cursor-pointer"
      initial={{opacity:0,y:-10}}
      transition={{duration : 0.4 , delay : 0.2}}
      viewport={{once:true}}
      whileInView={{opacity:1,y:0}}
      >
        Github
      </motion.h3>
      </Link>
    </div>
  );
};

export default Navbar;
