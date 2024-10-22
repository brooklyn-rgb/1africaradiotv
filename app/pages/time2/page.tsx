import React from 'react'

export default function Time() {
  return (
   <div className=' flex bg-black py-16 text-white p-4 justify-center'>
      <section>
      <h1 className="text-3xl font-bold mb-10">| Radio Live Shows</h1>
      <div className="grid sm:grid-cols-4 gap-4 grid-cols-1">
        <div>
          <div className="bg-cover bg-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/roJe2QhziA4" 
  title="YouTube video player" 
  frame-border="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allow-fullscreen></iframe>
          </div>
          <h3 className="text-lg font-semibold mt-2">AfroBrunch <span className="text-[#a2790d]"> Host: Mbali Ntuli <br /> Time: Mon-Thu 9am - 11am</span></h3>
        </div>
        <div>
          <div className="bg-cover g-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/t122FAZrTBA" 
  title="YouTube video player" 
  frame-border="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allow-fullscreen></iframe>
          </div>
          <h3 className="text-lg font-semibold mt-2">Street Quiz With Clifford EP1<span className="text-[#a2790d]"> <br /> Why do women cheat?</span></h3>
        </div>
        <div>
          <div className="bg-cover bg-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/n8SDZZxQVvE" 
  title="YouTube video player" 
  frame-border="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allow-fullscreen></iframe>
          </div>
          <h3 className="text-lg font-semibold mt-2">Host: Qhude Manikiniki  <span className="text-[#a2790d]"><br /> Time: Saturdays 6AM-9AM </span></h3>
        </div>
        <div>
          <div className=" bg-cover bg-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/scYPQfpFq5E" 
  title="YouTube video player" 
  frame-border="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allow-fullscreen></iframe>
          </div>
          <h3 className="text-lg font-semibold mt-2">Zola 7 <span className="text-[#a2790d]">Writers Bench</span></h3>
        </div>
      </div>
   </section>      
    </div>
  )
}


