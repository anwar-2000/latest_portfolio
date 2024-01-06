import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Xps from '@/components/Xps'


export default function Home() {
  return (
       <div className="bg-white flex  flex-col items-center justify-center">
        <Hero />
        <Introduction />
        <Xps />
       </div>
  )
}
