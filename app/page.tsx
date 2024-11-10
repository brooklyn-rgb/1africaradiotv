import Image from "next/image";
import Bnr from "./components/Bnr";
import About from "./pages/about/page";
import Team from "./pages/team/page";
import About2 from "./pages/about2/page";
import Video from "./pages/video/page";
import { cookies } from 'next/headers'
import Hero from "./components/Hero";
import Team2 from "./pages/team2/page";
import Time from "./pages/time/page";
import Time2 from "./pages/time2/page";
import PromotionalBannerCarousel from "./pages/banner/promotional-banner-carousel";
import Social from "./pages/social/page";


export default function Home() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  return (
    <div>
      <Hero />
      <div className='bg-gray-900'>
                <img src='/banner.webp'/>
                </div>
      <div className="py-10 container">
        <div className="overflow-hidden">
          <PromotionalBannerCarousel />
        </div>
      </div>
      <Team />
    <About2 />
    <Time />
    <Video />
    <Team2 />
    <Time2 />
    <Bnr />
    <Social />    
    </div>
  );
}
