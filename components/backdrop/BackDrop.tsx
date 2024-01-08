"use client"
import { motion } from 'framer-motion'
import React from 'react'

interface Props {
    children : React.ReactNode
    onClick : () => void
}

const BackDrop = ({children,onClick}:Props) => {
  return <motion.div className='cursor-pointer z-10 fixed top-0 left-0 w-full h-full bg-slate-700 bg-opacity-70 flex items-end justify-center' onClick={onClick}
  initial={{opacity : 0}}
  animate={{opacity : 1}}
  exit={{opacity : 0}}
  >
        {children}
  </motion.div>
}

export default BackDrop