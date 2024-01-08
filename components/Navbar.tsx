"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {}

const Navbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center md:justify-end gap-4 bg-white px-12">
      <Link target="_blank" href="https://www.linkedin.com/in/khaled-khaouani/">
      <motion.h3 className="text-black text-lg cursor-pointer "
      initial={{opacity:0,y:-10}}
      transition={{duration : 0.3 , delay : 0.2}}
      viewport={{once:true}}
      whileInView={{opacity:1,y:0}}
      >
        Linkedin
      </motion.h3>
      </Link>
      <Link href="/pdf/Khaled_Khaouani_web_dev.pdf" download target="_blank">
      <motion.h3
      initial={{opacity:0,y:-10}}
      transition={{duration : 0.4 , delay : 0.5}}
      viewport={{once:true}}
      whileInView={{opacity:1,y:0}} 
      className="bg-black text-white font-bold px-6 py-2 rounded-full">resume.pdf</motion.h3>
      </Link>
      <Link target="_blank" href="https://www.github.com/anwar-2000/">
      <motion.h3 className="text-black text-lg cursor-pointer"
      initial={{opacity:0,y:-10}}
      transition={{duration : 0.5 , delay : 0.9}}
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
