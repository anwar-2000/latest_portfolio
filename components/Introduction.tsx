"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


const introduction = "5 years of experience. I have worked with a variety of technologies, including PHP, VanillaJS, Python Django, ReactJS, Express NodeJS, and NEXTJS."
const words = introduction.split(" ");

const Introduction = () => {
  const element = useRef(null)
  const {scrollYProgress} = useScroll({
    target : element,
    offset : ["start 0.9","start 0.25"]
  })
  return <>
  <div className="w-10/12 py-4 flex items-start justify-between">
  <p 
  ref={element}
  className="flex flex-wrap text-6xl self-start w-4/5 font-extralight text-black">
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

const Word = ({children,range,progress}:any)=>{
    const opacity = useTransform(progress,range,[0,1])
    return <motion.span style={{opacity : opacity}} className="mx-1" >{children}</motion.span>
}