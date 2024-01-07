"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface Props {}

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 400, y: 140 });
  const handleMouseMove = (event:any) => {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handleMouseLeave = (event:any) => {
    setCursorPosition({
      x:400,
      y:140,
    });
  };
  return <>
    <div className="relative flex flex-col items-start justify-start w-10/12 pt-4 pb-14" >
    <motion.img
        src="/images/wave.png"
        alt="Cursor Image"
        style={{
          position: 'absolute',
          top: 15,
          left: 140,
          width : "30px",
          pointerEvents: 'none', 
        }}
        className="block md:hidden"
        initial={{ opacity: 0, rotate : 20 }}
        whileInView={{ opacity: 1, rotate: [20, 0, 20, 0, 20, 0,20,0,20,0] }}
        exit={{ opacity: 0, }}
        transition={{ duration: 1, ease: 'linear' }}
      />
    <motion.img
        src="/images/wave.png"
        alt="Cursor Image"
        style={{
          position: 'absolute',
          top: cursorPosition.y - 100,
          left: cursorPosition.x - 100,
          width : "50px",
          pointerEvents: 'none', 
        }}
        className="hidden md:block"
        initial={{ opacity: 0, rotate : 20 }}
        whileInView={{ opacity: 1, rotate: [20, 0, 20, 0, 20, 0,20,0,20,0] }}
        exit={{ opacity: 0, }}
        transition={{ duration: 1, ease: 'linear' }}
      />
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-6xl md:text-9xl font-extrabold text-black "
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        Hey,
      </motion.h1>
      <motion.h1
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-6xl md:text-9xl font-bold text-black "
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        I&apos;m Khaled
      </motion.h1>
      <div className="w-full flex flex-wrap items-center justify-between">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 1 }}
          width={400}
          src="/images/img4.jpg"
          alt="Me"
          className="mt-4 md:mt-20 md:h-[440px]"
        />
        <motion.small
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-black w-full md:w-3/5 self-end mr-18 mt-4 md:pt-16 text-3xl md:text-6xl font-light"
        >
          — a full stack web developer specializing in Next.js and React I have
          a diverse skill set that allows me to tackle complex challenges with
          ease.
        </motion.small>
      </div>
    </div>
  </>;
};

export default Hero;
