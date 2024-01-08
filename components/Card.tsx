import Link from 'next/link'
import React from 'react'

type Props = {
    title : string
    description : string
    image : string
    url : string,
    date : string
    type : "certificates" | "projects"
}

const Card = ({title,url,image,date,type}:Props) => {
  return <div className='bg-white cursor-pointer text-slate-700 drop-shadow-xl hover:bg-slate-200 border-slate-600	relative w-[320px] min-h-[320px] flex flex-col items-start justify-start gap-2  rounded-md'>
    <div className="w-full relative flex items-center justify-center p-2">
      <img src={image} alt={title} className={`w-11/12 h-40 rounded-lg ${image === "/images/studpro.png" && "blur-sm"} `}/>
    </div>
    <h1 className='font-bold text-lg pl-2 '>
        {title}
    </h1>
    <small className='pl-2'>{type === "projects" ? image === "/images/studpro.png" ? "Internship" : "Side Project" : ""}</small>
    {date && <small className='pl-2'>{date}</small>}
     { url.length > 0 && <Link href={url} target="_blank"><button onClick={(e)=>e.stopPropagation()} className='bg-bg-main py-2 px-8 text-white absolute bottom-6 right-4 rounded-md'>Visit</button></Link>}
  </div>
}

export default Card