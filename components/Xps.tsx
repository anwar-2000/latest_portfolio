import React from 'react'
import Card from './Card'

interface Props {}

const Xps = () => {
  return <div className='erlative bg-white px-8 py-14  flex flex-wrap items-center justify-start gap-4 w-10/12'>
    <h1 className='w-full self-start text-3xl font-extrabold text-black'>#Latest_projects</h1>
    <Card title={'StudPro'} description={'hdhjbqcbsbdcsbhdcjhsbdchjbdchjsdbchdbcjhdbchjsbdcjhbdchsbdcjbdchsbdcjbsdc'} image={'/images/studpro.png'} url={''}  />
    <Card title={'Mon Salon Connect'} description={'hdhjbqcbsbdcsbhdcjhsbdchjbdchjsdbchdbcjhdbchjsbdcjhbdchsbdcjbdchsbdcjbsdc'} image={'/images/monsalonconnect.png'} url={''}  />
    <Card title={'My Cyber Shop'} description={'hdhjbqcbsbdcsbhdcjhsbdchjbdchjsdbchdbcjhdbchjsbdcjhbdchsbdcjbdchsbdcjbsdc'} image={'/images/mycybershop.png'} url={''}  />
    <Card title={'Online Screen Recorder'} description={'hdhjbqcbsbdcsbhdcjhsbdchjbdchjsdbchdbcjhdbchjsbdcjhbdchsbdcjbdchsbdcjbsdc'} image={'/images/screen.png'} url={''}  />
    <Card title={'Driiiblle clone'} description={'hdhjbqcbsbdcsbhdcjhsbdchjbdchjsdbchdbcjhdbchjsbdcjhbdchsbdcjbdchsbdcjbsdc'} image={'/images/friible.png'} url={''}  />
    <h5 className='text-blue-600 w-full cursor-pointer hover:text-blue-800 text-end'>#View_more</h5>
    </div>
}

export default Xps