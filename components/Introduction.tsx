"use client"
import { introduction } from "@/consts/texts";
import { useScroll } from "framer-motion"
import { useRef } from "react"
import Word from "./Word";


const words = introduction.split(" ");

const Introduction = () => {
  const element = useRef(null)
  const {scrollYProgress} = useScroll({
    target : element,
    offset : ["start 0.9","start 0.2"]
  })
  return <>
  <div className="w-full py-20 h-2/3 bg-black text-white flex items-center justify-center">
  <p 
  ref={element}
  className="flex flex-wrap text-3xl md:text-5xl self-start p-2 w-full md:w-4/5 font-extrabold">
    {words.map((word,i)=>{
        const start = i / words.length
        const end = (i + 1) / words.length;
        return   <Word key={i} range={[start,end]} progress={scrollYProgress}>{word}</Word>
    }
    )}
  </p>
  </div>
  
  </>
}

export default Introduction
