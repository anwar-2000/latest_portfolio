"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'


const WorkExperience = () => {
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target : container,
        offset: ["300px end", "end end"]
    })
    const pathDashArray = useTransform(scrollYProgress, [0, 1], [200, 1000]);
  return <div ref={container} className="w-full h-screen">
    <motion.svg width="100%" viewBox="0 0 600 400" className="w-full">
      <motion.path
        d="M56 23 C136 40, 270 18, 346 82 
           C422 146, 245 184, 330 254 
           C416 324, 565 313, 654 336"
        fill="none"
        stroke="hsl(212, 72%, 59%)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-dasharray={pathDashArray} 
      />
    </motion.svg>
  </div>
}

export default WorkExperience