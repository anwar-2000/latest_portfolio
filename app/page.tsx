
import Recommendation from '@/components/Recommendation'
import { certificates } from '@/consts/cards'
import CardItems from '@/components/CardsItems'
import Contact from '@/components/Contact'
import NewHero from '@/components/NewHero'
import Heading from '@/components/Heading'
import Projects  from '@/components/Projects'

import WorkExperience from '@/components/WorkExperience'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'


export default function Home() {
  return (
       <div className="bg-white flex overflow-x-hidden  flex-col items-center justify-center">
        <Hero />
        <Introduction />
        <Heading title='Projets' />
        <Projects />
        <Heading title='Recommendation' />
        <Recommendation />
        {/* <Heading title='Parcours Professionelle' /> */}
        {/* <WorkExperience /> */}
        <Heading title='Diplômes' />
        {/* <CardItems cards={projects} title="Latest_XP_projects" type="projects" link='https://github.com/anwar-2000' /> */}
        <CardItems cards={certificates} title="Certificates" type="certificates" link='' />
        <Contact />
       </div>
  )
}