import Image from "next/image";
import Bnr from "./components/Bnr";
import About from "./pages/about/page";
import Team from "./pages/team/page";
import About2 from "./pages/about2/page";
import Video from "./pages/video/page";
import { cookies } from 'next/headers'


export default function Home() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  return (
    <div>
      
      <Team />
    <About2 />
    <Video />
    <Bnr />
    </div>
  );
}
