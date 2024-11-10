import Image from "next/image";
import Bnr from "./components/Bnr";
import About from "./pages/about/page";
import Legends from "./pages/legends/page";
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
      <div className="py-10  bg-[url('/social/news.jpg')] bg-cover bg-no-repeat">
        <div className="">
          <PromotionalBannerCarousel />
        </div>
      </div>
      <div className='bg-gray-900'>
                <img src='/banner.webp'/>
                </div>
      <Legends />
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
