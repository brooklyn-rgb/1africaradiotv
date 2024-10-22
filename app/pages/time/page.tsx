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
  src="https://www.youtube.com/embed/0kgflwDeh2c" 
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
          <h3 className="text-lg font-semibold mt-2">Good morning Africa <span className="text-[#a2790d]">  Kagiso Rakosa <br /> Time: 6am - 9am</span></h3>
        </div>
        <div>
          <div className="bg-cover g-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/9Ga8DN6DGy4" 
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
          <h3 className="text-lg font-semibold mt-2">1 Africa Drive<span className="text-[#a2790d]">  Host: V&V (Vuyisa) <br /> Time: 3pm-6pm </span></h3>
        </div>
        <div>
          <div className="bg-cover bg-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/33pqJtKV_Ko" 
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
          <h3 className="text-lg font-semibold mt-2">Wash Down <span className="text-[#a2790d]">Host: Scorebeatz <br /> Time: Fridays 1pm-3pm </span></h3>
        </div>
        <div>
          <div className=" bg-cover bg-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/LeEe6vKqtDw" 
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
          <h3 className="text-lg font-semibold mt-2">Mo'Fyah <span className="text-[#a2790d]">Host: Bobotikal <br /> Time: Fridays 9am-11am</span></h3>
        </div>
      </div>
   </section>      
    </div>
  )
}


