import React from 'react'

const Hero = () => {
  return (
    <div>
    

<div className="bg-hero bg-no-repeat bg-cover bg-top pt-0.5 pb-32 hidden md:block">
  <div className="mt-8 flex">
    <img className="h-44 mx-auto" src="/" alt=""/>
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
          Live Radio
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
          news
        </a>
      </li>
    </ul>
  </nav>
</div>

    </div>
  )
}

export default Hero
