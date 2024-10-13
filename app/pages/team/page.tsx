import React from 'react'

export default function Team() {
  return (
   <div className='bg-black py-16 text-white p-4'>
      <section>
      <h1 className="text-3xl font-bold mb-10">Pan African Radio Staion</h1>
      <div className="grid sm:grid-cols-4 gap-4 grid-cols-1">
        <div>
          <div className="bg-[url('/images/mandela.jpeg')] bg-cover bg-no-repeat h-44"></div>
          <h3 className="text-lg font-semibold mt-2">Nelson Rolihlahla Mandela <span className="text-[#a2790d]">  Pan African</span></h3>
        </div>
        <div>
          <div className="bg-[url('/images/cetshwayo.jpeg')] bg-cover g-no-repeat h-44"></div>
          <h3 className="text-lg font-semibold mt-2">Cetshwayo KaMpande  <span className="text-[#a2790d]">  Zulu Kingdom</span></h3>
        </div>
        <div>
          <div className="bg-[url('/images/steve2.jpeg')] bg-cover bg-no-repeat h-44"></div>
          <h3 className="text-lg font-semibold mt-2">Steve Biko<span className="text-[#a2790d]">  Pan African Leader</span></h3>
        </div>
        <div>
          <div className="bg-[url('/images/nkruma.jpeg')] bg-cover bg-no-repeat h-44"></div>
          <h3 className="text-lg font-semibold mt-2">Kwame Nkrumah  <span className="text-[#a2790d]">  Pan African Leader</span></h3>
        </div>
      </div>
   </section>      
    </div>
  )
}


