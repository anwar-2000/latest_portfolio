"use client"
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'
import Card from './Card'
import Modal from './modal/Modal';

type Props = {
  title : string
  cards : any[]
  link? : string
  type : "projects" | "certificates"
}

const CardItems = ({title,cards,link,type}:Props) => {
  const [cardModal, setCardModal] = useState({
    state : false,
    image : "",
    title : "",
    description : "",
    url : "",
    skills : []
  })
  const closeModal = () =>{
    setCardModal({state : false , image:"",description:"",url:"",title:"",skills:[]})
  }
  return <>
    <AnimatePresence mode='wait'>
{    cardModal.state && <Modal type={type} description={cardModal.description} image={cardModal.image} onClose={closeModal} title={cardModal.title} url={cardModal.url} skills={cardModal.skills}  />}
    </AnimatePresence>

    <div className='relative bg-white pt-30 flex flex-wrap items-center justify-start gap-4 w-10/12'>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once : true}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={()=>setCardModal({state : true , image : card.image , title : card.title , description : card.description , url : card.url , skills : card.skills || []})}
          >
            <Card title={card.title} description={card.description} image={card.image} url={card.url} date={card.date} type={type}/>
          </motion.div>
        ))}
      { link && <Link href={link} target="_blank" className='text-blue-600 w-full cursor-pointer hover:text-blue-800 pb-8 md:pb-4 text-end'>#View_more</Link>}
    </div>
    </>
};

export default CardItems;