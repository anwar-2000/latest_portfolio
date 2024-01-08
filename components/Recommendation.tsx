"use client"
import { recommendation } from '@/consts/texts';
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link';
import React, { useRef } from 'react'
import Word from './Word';

interface Props {}


const words = recommendation.split(" ");

const Recommendation = () => {
    return <>
    <div className="w-10/12 py-14 flex flex-col lg:flex-row items-start justify-center ">
    <div className="flex flex-col items-start justify-start gap-4 text-black">
        <h3 className='self-start text-2xl md:text-4xl font-extrabold text-black'>#Recommendations</h3>
        <h5>— Michael Smets —</h5>
        <small className='md:w-9/12'>Freelance Ingénieur Full Stack / Conseil et développement web et mobile en se basant sur l'informatique durable (Green It)Freelance Ingénieur Full Stack / Conseil et développement web et mobile en se basant sur l'informatique durable <br /> December 22, 2023, Michael managed khaled directly</small>
        <Link href="https://www.linkedin.com/in/michaelsmets86/" className='text-blue-700'>Open Linkedin</Link>
    </div>
    <q 
    className="flex flex-wrap md:text-3xl mt-4 self-start w-4/5 font-light text-black">
      {words.map((word,i)=>{
          return <motion.span  className='mx-1' key={i} initial={{opacity : 0}} whileInView={{opacity : 1}} viewport={{once:true}} transition={{ delay: i * 0.1 }}>{word}</motion.span>
      }
      )}
    </q>
    </div>
    
    </>
  }

export default Recommendation