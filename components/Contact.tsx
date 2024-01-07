import Link from 'next/link'
import React from 'react'

interface Props {}

const Contact = () => {
  return <div className='bg-black text-white w-full mt-14 p-8 flex items-center justify-center'>
        <div className="flex flex-col md:flex-row items-center justify-evenly w-10/12">
        <Link href="mailto:khaledkhaouani5@gmail.com">khaledkhaouani5@gmail.com</Link>
        <h1 >- Get in Touch With me -</h1>
        <Link href="tel:+33745082210"> {"(+33)"} 07 45 08 22 10 </Link>
        </div>
  </div>
}

export default Contact