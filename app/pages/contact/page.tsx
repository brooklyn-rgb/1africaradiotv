import React from 'react'

export default function Contact() {
  return (
    <div>

<section className="min-h-screen bg-gradient-to-r from-black via-[#a67c00] to-black dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
    <div className="container mx-auto flex min-h-screen flex-col px-6 py-12">
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="text-white lg:mx-6 lg:w-1/2">
            <h1 className="text-3xl font-semibold capitalize lg:text-5xl text-[#a67c00] underline">1AfricaradioTv</h1>

            <p className="mt-6 max-w-xl">Ask us everything and we would love to hear from you</p>

            <div className="mt-6 space-y-8 md:mt-8">
            <p className="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-2 w-72 truncate text-white"> 75 3rd AveMelville, Johannesburg, 2109                 </span>
            </p>

            <p className="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>

                <span className="mx-2 w-72 truncate text-white">+27 (011) 433-0211</span>
            </p>

            <p className="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <span className="mx-2 w-72 truncate text-white">info@1africaradiotv.com</span>
            </p>
            </div>

            <div className="mt-6 md:mt-8">
            <h3 className="text-gray-300">Follow us</h3>

            <div className="-mx-1.5 mt-4 flex">
            <a href="https://x.com/1africaradiotv" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/twitter.svg" alt="x" className="w-10 h-10"/>

                </a>

                <a href="https://www.youtube.com/@1africaradiotv" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/youtube.svg" alt="youtube" className="w-10 h-10"/>

                </a>  

                <a href="https://www.facebook.com/profile.php?id=100086667417275" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/fb.svg" alt="facebook" className="w-10 h-10"/>

                </a>

                <a href="https://www.instagram.com/1africaradio_tv/" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/instagram.webp" alt="instagram" className="w-10 h-10"/>

                </a>
            </div>
            </div>
        </div>

        <div className="mt-8 lg:mx-6 lg:w-1/2">
            <div className="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 lg:max-w-xl">
            <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">Contact Us</h1>

            <form className="mt-6">
                <div className="flex-1">
                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                <input type="text" placeholder="John Doe" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div className="mt-6 flex-1">
                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Email address</label>
                <input type="email" placeholder="johndoe@example.com" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div className="mt-6 w-full">
                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Message</label>
                <textarea className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 md:h-48" placeholder="Message"></textarea>
                </div>

                <button className="mt-6 w-full transform rounded-md bg-black px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-[#a67c00] focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">get in touch</button>
            </form>
            </div>
        </div>
        </div>
    </div>
    </section>
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6414614120804!2d28.008140800000003!3d-26.175803799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b8fcbbefe99%3A0x50df1eddb62cf918!2s75%203rd%20Ave%2C%20Melville%2C%20Johannesburg%2C%202109!5e0!3m2!1sen!2sza!4v1729198797957!5m2!1sen!2sza" width="1500" height="450" allow-fullscreen="" loading="lazy" referrer-policy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}
