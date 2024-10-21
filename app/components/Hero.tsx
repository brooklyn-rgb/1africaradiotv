import React from 'react'

const Hero = () => {
  return (
    <div>
    

<div className="flex-auto bg-hero bg-no-repeat bg-cover bg-top pt-0.5 pb-8 md:block">
  <div className="mt-4 flex">
    <img className="h-44 mx-auto" src="/" alt=""/>
  </div>
  <div className='flex justify-center py-4'>
    <iframe className='bg-[url("/music.gif")] bg-no-repeat bg-cover bg-opacity-60 text-white rounded p-4 px-4' src="https://radio3.eclipse-streaming.co.za/public/1africaradio/embed?theme=light" frame-border="0" allow-transparency="true" width={250} height={130}></iframe>
  </div>
    <p className='[writing-mode:vertical-lr] text-center text-7xl underline text-white px-32 font-extrabold'>
   RadioTv <br /> 1Africa
    </p>
  <nav className="mt-10 flex">
    <ul className="triangle-menu bg-black text-white uppercase font-semibold h-8 inline-flex mx-auto items-center">
      
      <li className="px-6">
        <a href='/streaming'>
          Live Show
        </a>
      </li>
      <span>/</span>
      <li className="px-6">
        <a href=''>
          TV
        </a>
      </li>
      <span>/</span>
      <li className="px-6">
        <a href='/streaming'>
          Streaming
        </a>
      </li>
    </ul>
  </nav>
</div>

    </div>
  )
}

export default Hero
