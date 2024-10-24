"use client"
import React from 'react'
import Project from './Project'
import {motion} from "framer-motion"
import { projects } from '@/consts/cards'

interface Props {}

const Projects = () => {
  return <motion.div
   className='w-full flex items-center justify-center gap-4 flex-wrap'>
    {projects.map((project,index)=>(
      <Project key={index} type={project.type} index={index} title={project.title} link={project.url} image={project.image} description={project.description} />
    ))}
        
  </motion.div>
}

export default Projects