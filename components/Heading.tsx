import React from 'react'
import { TbBorderCornerRounded } from "react-icons/tb";
interface Props {
    title : string
}

const Heading = ({title} : Props) => {
  return <div className=' relative pl-8 pt-8 pb-5  w-full md:w-full md:p-14 flex items-center justify-start'>
    <div className="relative">
    <TbBorderCornerRounded className="absolute -top-2 -left-4" color='black' size={25}/>
        <h1 className='text-2xl md:text-7xl font-extrabold text-start z-10'>{title}</h1>
    <TbBorderCornerRounded className="absolute -bottom-2 -right-4 rotate-180" color='black' size={25}/>
    </div>
  </div>
}

export default Heading