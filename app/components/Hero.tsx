import React from 'react'

const Hero = () => {
  return (
    <div>
    

<div className="bg-hero bg-no-repeat bg-cover bg-top pt-0.5 pb-32 md:block">
  <div className="mt-8 flex">
    <img className="h-44 mx-auto" src="/" alt=""/>
  </div>
  <div className='flex justify-start py-4'>
    <iframe className='bg-red-500 bg-opacity-30 rounded p-4 px-4' src="https://radio3.eclipse-streaming.co.za/public/1africaradio/embed?theme=light" frame-border="0" allow-transparency="true" width={250} height={130}></iframe>
  </div>
  <nav className="mt-10 flex">
    <ul className="triangle-menu bg-red-500 text-white uppercase font-semibold h-8 inline-flex mx-auto items-center">
      <li className="px-6">
        <a href=''>
          1AfricaradioTv
        </a>
      </li>
      <span>/</span>
      <li className="px-6">
        <a href=''>
          Live
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
        <a href=''>
          News
        </a>
      </li>
    </ul>
  </nav>
</div>

    </div>
  )
}

export default Hero
