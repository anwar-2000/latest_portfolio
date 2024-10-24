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
  <div className="w-full md:p-20 md:h-screen bg-black text-black flex items-center justify-center">
  <p 
  ref={element}
  className="text-slate-300 w-full flex flex-wrap text-xl md:text-6xl self-start md:p-2 md:w-6/5 font-extrabold">
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
