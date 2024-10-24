
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

interface Props {
    title : string
    link? : string
    image : string
    description : string
    index : number
    type: string

}

const Project = ({title,image,description,link,index,type}:Props) => {
  return <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once : true}}
            transition={{ duration: 0.9, delay: index * 0.4 }}
  className='relative w-3/4 md:w-2/5 p-12  flex flex-col items-start justify-start gap-3 border-2 rounded-lg  cursor-pointer hover:bg-blue-500'>
        <div className="relative w-full h-full ">
            <img src={image} alt={title + " " + "images"}  className="w-full h-full rounded-md" />
        </div>
        <div className="flex flex-col items-start justify-start w-5/12  p-2 ">
          <div className="flex flex-col items-start justify-start  ">
                <h1 className='font-extrabold text-xl md:text-4xl'>{title}</h1>
                <Link href={link!} target="_blank"><small className='text-blue-800'>{link}</small></Link>
          </div>
          <small>{type}</small>
          <div className="py-4">
            <h4><span className='font-extrabold'>Tech: </span>Reactjs, Nextjs, Typescript, Docker-compose, Prisma, NextAUTH, PostgreSQL, Gitlab. </h4>
          </div>
                {/* <h4>{description}</h4> */}
        </div>
        
  </motion.div>
}

export default Project