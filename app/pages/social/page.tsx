import Link from 'next/link'
import React from 'react'

export default function Social() {
  return (
    <div className='flex auto-flex justify-center px-4 py-8 bg-gray-900'>
                      
             <div className="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0 gap-4">    
            <Link href='https://wa.me/27789349311'>     
            <img src="/social/whatsapp.svg" alt="WhatsApp" className="w-10 h-10"/>
            </Link>
            
            <Link href='https://www.facebook.com/profile.php?id=100086667417275' className="mx-2 text-gray-100 hover:text-gray-400">
            <img src="/social/fb.svg" alt="facebook" className="w-10 h-10"/>
            </Link>

            <Link href='https://www.tiktok.com/search?q=1africaradiotv&t=1729608757366' className="mx-2 text-gray-100 hover:text-gray-400">               
            <img src="/social/tiktok.svg" alt="tiktok" className="w-10 h-10 rounded"/>
            </Link>

            <Link href='https://x.com/1africaradiotv' className="mx-2 text-gray-100 hover:text-gray-400">               
            <img src="/social/twitter.svg" alt="x" className="w-10 h-10"/>
            </Link>

            <Link href='https://www.youtube.com/@1africaradiotv' className="mx-2 text-gray-100 hover:text-gray-400">               
            <img src="/social/youtube.svg" alt="youtube" className="w-10 h-10"/>
            </Link> 

            <Link href='https://www.instagram.com/1africaradio_tv' className="mx-2 text-gray-100 hover:text-gray-400">             
            <img src="/social/instagram.webp" alt="instagram" className="w-10 h-10 rounded"/>
            </Link>

            <Link href='https://wa.me/27789349311' className="mx-2 text-gray-100 hover:text-gray-400">             
            <img src="/social/phone.svg" alt="phone" className="w-10 h-10 rounded"/>
            </Link>
        </div> 

</div>
      
  )
}
