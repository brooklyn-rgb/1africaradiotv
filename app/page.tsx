import Image from "next/image";
import Bnr from "./components/Bnr";
import Hero from "./components/Hero";
import About from "./pages/about/page";
import Team from "./pages/team/page";
import About2 from "./pages/about2/page";
import Video from "./pages/video/page";


export default function Home() {
  return (
    <div>
      <Hero />
      <Team />
    <About2 />
    <Video />
    <Bnr />
    </div>
  );
}
