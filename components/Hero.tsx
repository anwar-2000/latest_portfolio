"use client";
import { motion } from "framer-motion";
import React from "react";

interface Props {}

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-start w-10/12 pt-4 pb-14">
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-6xl md:text-9xl font-extrabold text-black "
      >
        Hey,
      </motion.h1>
      <motion.h1
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-6xl md:text-9xl font-bold text-black "
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
  );
};

export default Hero;
