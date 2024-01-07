"use client"
import { motion, useTransform } from 'framer-motion'
import React from 'react'

interface Props {}

const Word = ({children,range,progress}:any)=>{
    const opacity = useTransform(progress,range,[0,1])
    return <motion.span style={{opacity : opacity}} className="mx-1" >{children}</motion.span>
}

export default Word