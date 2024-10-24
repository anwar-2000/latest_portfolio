"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'
import StudPro from "../public/images/studpro_design.png"
import Emmaus from "../public/images/emmaus.png"
import Csv from "../public/images/csvizualiser.png"

const Paralax = () => {
    const container = useRef(null);


    const { scrollYProgress } = useScroll({

        target: container,

        offset: ['start start', 'end end']

    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
const pictures = [
    {
        src: StudPro,
        scale: scale4
    },
    {
        src: Csv,
        scale: scale5
    },

    {
        src: Emmaus,
        scale: scale6
    },

]
  return <div ref={container} className='relative w-full h-[300vh]'>
    <div className="sticky top-0 overflow-hidden h-[100vh]">
        <motion.div style={{scale}} className="w-full h-full absolute top-0 flex items-center justify-center">
            <div className="relative w-[25vw] h-[25vh]">
                <Image src={Emmaus} alt="" fill placeholder='blur' className='object-cover'/>
            </div>
        </motion.div>
    </div>
  </div>
}

export default Paralax