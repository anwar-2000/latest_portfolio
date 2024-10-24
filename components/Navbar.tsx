"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {}

const Navbar = () => {
  return (
    <div className="w-full h-24 flex items-center  justify-between gap-4 bg-white px-12">
      <motion.img
      initial={{opacity:0,y:-10}}
      transition={{duration : 0.5 }}
      whileInView={{opacity:1,y:0}}
        src="/images/img4.jpg"
        alt="Me"
        className="w-12 rounded-md"
      />
      <div className="flex items-center justify-between gap-4">
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
      {/* <Link href="/" download target="_blank">
      <motion.h3
      initial={{opacity:0,y:-10}}
      transition={{duration : 0.4 , delay : 0.5}}
      viewport={{once:true}}
      whileInView={{opacity:1,y:0}} 
      className="bg-black text-white font-bold px-6 py-2 rounded-full">resume.pdf</motion.h3>
      </Link> */}
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
    </div>
  );
};

export default Navbar;
