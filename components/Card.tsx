import Link from 'next/link'
import React from 'react'

interface Props {
    title : string
    description : string
    image : string
    url : string
}

const Card = ({title,url,image}:Props) => {
  return <Link href={url}>
    <div className='bg-slate-100 relative w-[320px] min-h-[300px] flex flex-col items-start justify-start gap-2  rounded-md'>
    <div className="w-full relative flex items-center justify-center p-2">
      <img src={image} alt={title} className="w-11/12 h-40 rounded-lg "/>
    </div>
    <h1 className='text-black font-bold text-lg  pl-2'>
        {title}
    </h1>
     <button className='bg-bg-main py-2 px-8 text-white absolute bottom-6 right-4 rounded-md'>Details</button>
  </div>
  </Link>
}

export default Card