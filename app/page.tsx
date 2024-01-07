import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Recommendation from '@/components/Recommendation'
import { certificates, Projects } from '@/consts/cards'
import CardItems from '@/components/CardsItems'
import Contact from '@/components/Contact'


export default function Home() {
  return (
       <div className="bg-white flex  flex-col items-center justify-center">
        <Hero />
        <Introduction />
        <Recommendation />
        <CardItems cards={Projects} title="Latest_XP_projects" type="projects" link='https://github.com/anwar-2000' />
        <CardItems cards={certificates} title="Certificates" type="certificates" link='' />
        <Contact />
       </div>
  )
}
