import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Recommendation from '@/components/Recommendation'
import { certificates, Projects } from '@/consts/cards'
import CardItems from '@/components/CardsItems'


export default function Home() {
  return (
       <div className="bg-white flex  flex-col items-center justify-center">
        <Hero />
        <Introduction />
        <Recommendation />
        <CardItems cards={Projects} title="Latest_projects" link='https://github.com/anwar-2000' />
        <CardItems cards={certificates} title="Certificates" link='' />
       </div>
  )
}
