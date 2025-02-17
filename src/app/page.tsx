
import Slider from '@/components/Slider'
import FeaturedBooks from '@/components/FeaturedBooks'
import Benefits from '@/components/Benefits'


export default function Home() {
  return (
    <main className="min-h-screen pt-28">
      <Slider />
      <FeaturedBooks />
      <Benefits />
    </main>
  )
}
