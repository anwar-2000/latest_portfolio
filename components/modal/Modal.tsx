"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import BackDrop from '../backdrop/BackDrop'

type Props  = {
    title : string
    image : string
    description : string
    url : string
    skills : string[]
    onClose  : () => void
    type : "projects" | "certificates"
}


const FadeIn = {
    hidden : {
        opacity : 0,
        y : "200vh"
    },
    visible : {
        opacity : 1,
        y : 0,
        transition : {
            duration : 0.5
        },
    },
    exit : {
        opacity : 0,
        y : "100vh",
        
    }
}
const Modal = ({title,description,image,url,onClose,skills,type}:Props) => {
  return <BackDrop onClick={onClose}>
        <motion.div onClick={(e)=>e.stopPropagation()} 
        variants={FadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className='w-full md:w-4/5 h-[90vh] overflow-y-auto z-20 bg-white text-white flex flex-col items-start justify-start gap-4 rounded-tl-2xl rounded-tr-2xl '
        >
        <div className="relative w-full">
            <img src={image}  alt={title + " " + "image"} className={`w-full rounded-md ${image === "/images/studpro.png" && "blur-sm"} `}/>
        </div>
        <div className="self-stretch w-full bg-white text-black flex flex-col items-start justify-start pb-8">
        <h3 className='pl-4 text-4xl pb-4'>{title}</h3>
        <h6 className='font-bold pl-4'>{type === "certificates" ? "Certificate description : " : "Project Description"}</h6>
        <p className='font-light text-lg pl-4 w-10/12'>{description}</p>
       {skills.length > 0 && <h6 className='font-bold pl-4'>Tech Stack :</h6>}
        <ul className='pl-4'>
            {skills.map((skill,i)=>(
                <li key={i}>{skill}</li>
            ))}
        </ul>
{ url.length > 0 && <Link href={url} className="self-center py-4"><button className='py-4 px-14 bg-blue-700 rounded-lg text-white font-bold'>Visit</button></Link>}        </div>
        </motion.div>
  </BackDrop>
}

export default Modal