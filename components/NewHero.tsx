"use client"
import { motion } from "framer-motion";
import React from "react";

const NewHero = () => {
  const headingVariants = {
    hidden : {
       opacity : 0,

    },
    visible : {
      opacity:1,
    }
  }
  const headingVariants2 = {
    hidden : {
       opacity : 0,

    },
    visible : {
      opacity:1,
    }
  }
  return (
    <div className="p-14 flex flex-col items-center justify-start h-screen w-full relative bg-white text-slate-800 font-sans font-bold ">
      <motion.h1 
      variants={headingVariants}
      initial="hidden"
      animate="visible"
      transition={{duration : 1}}
      className="text-9xl self-start z-20 ">Développeur Web</motion.h1>
      <motion.h1 
      variants={headingVariants2}
      initial="hidden"
      animate="visible"
      transition={{duration : 1 , delay : 0.4}}
      className="text-8xl  self-start z-20">
        <span className="text-red-500 z-20 font-Zilab font-thin">&</span> Admin Réseaux.
      </motion.h1>
      <div className="flex self-start flex-col items-center justify-center p-16 gap-1 z-20">
        <h3 className="text-2xl text-gray-500 self-start font-sans font-light">
          Front-End Dev : Reactjs , Nextjs.
        </h3>
        <h3 className="text-2xl self-start text-gray-600 font-sans font-light">
          Backend Dev : Nodejs Express , Python Django.
        </h3>
        <h3 className="text-2xl self-start text-gray-700 font-sans font-light">
        <span className="text-red-500 z-20 font-Zilab font-thin">&</span> Docker - Kubernetes.
        </h3>
        <h3 className="text-2xl self-start font-sans text-gray-900 font-light">
          Administration réseau, CCNA : connectivité fiable, intégrité assurée.
        </h3>
      </div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -top-20 -right-64 w-3/4 z-10">
        <path
          fill="#0F62FE"
          d="M34.6,-44.9C46.3,-39.2,58.1,-31,66.4,-18.5C74.7,-6,79.4,10.6,72,20.4C64.7,30.1,45.3,32.8,31.2,36.1C17.2,39.3,8.6,43,-4.3,49C-17.3,55,-34.5,63.1,-45.8,59C-57,54.8,-62.1,38.3,-67.7,21.8C-73.3,5.4,-79.2,-11.2,-77.1,-27.3C-75,-43.4,-64.7,-59.2,-50.5,-64.1C-36.3,-68.9,-18.2,-62.9,-3.3,-58.3C11.5,-53.7,23,-50.6,34.6,-44.9Z"
          transform="translate(100 100)"
        />
      </svg>
      
    </div>
  );
};

export default NewHero;
