import React from 'react'
import Link from 'next/link'

export default function Radio() {
  return (

<div className="relative">
  <button className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0 left-5 right-5 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10">
    <div className="p-2 rounded-full">
    <Link href={'https://wa.me/27789349311'}>
   
    <div className='flex justify-start py-4'>
    <iframe className='bg-red-500 bg-opacity-30 rounded p-4 px-4' src="https://radio3.eclipse-streaming.co.za/public/1africaradio/embed?theme=light" frame-border="0" allow-transparency="true" width={250} height={130}></iframe>
  </div>
      </Link>
    </div>

  </button>
</div>
  )
}

