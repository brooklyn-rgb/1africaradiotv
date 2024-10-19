import Image from "next/image";
import Bnr from "./components/Bnr";
import About from "./pages/about/page";
import Team from "./pages/team/page";
import About2 from "./pages/about2/page";
import Video from "./pages/video/page";
import { cookies } from 'next/headers'
import Hero from "./components/Hero";
import Team2 from "./pages/team2/page";


export default function Home() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  return (
    <div>
      <Hero />
      <Team />
    <About2 />
    <Video />
    <Team2 />
    <Bnr />
    
    </div>
  );
}
