"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Footer = () => {
    const form = useRef();

    const [loading, setLoading] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_37kg5ak', 'template_zx7h50p', form.current, {
          publicKey: 'SOP-AaGhqLcOmu2wm',
        })
        .then(
          () => {
            setLoading(false);
            alert("Thank you. We will get back to you as soon as possible.");
            console.log('SUCCESS!');
            console.log("message sent"); 
                         
  
          },
          (error) => {
            console.log('FAILED...', error.text);
            console.log("message not sent");
            setLoading(false);
            console.error(error);
            alert("Ahh, something went wrong. Please try again.");
             
          },
        );
    };
  return (
    <div>
     <div className="bg-black py-4 px-8">
     <h1 className="flex auto text-white font-normal space-x-8 text-xl">
     1AfricaradioTv: Live stream  |  Line-Up  | Podcast  |  Live Shows
     </h1>
     </div>
<footer className="bg-black py-8 text-white dark:bg-gray-900 border-t border-t-white">
    <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-bold tracking-tight xl:text-2xl dark:text-white text-[#bc9c22]">1AfricaradioTv</h1> 
                <br />
                <h2 className="font-bold text-[#a67c00] text-xl"> Location:<br /> <span className="text-white"> 75 3rd AveMelville, Johannesburg, 2109 </span> </h2>
                <br />
                <h3 className="font-bold text-[#a67c00] text-xl"> Studio Line: <br /> <span className="text-white">+27 (011) 433 0211.</span></h3>
                               
                <form ref={form} onSubmit={sendEmail} className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#a2790d] rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </form>
            </div>


            <div>
                <p className="font-semibold ">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="/" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                    <a href="/pages/team3" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Team</a>
                    <a href="/pages/foundation" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Foundation</a>
                </div>
            </div>

            <div>
                <p className="font-bold dark:text-white">More</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="/pages/show" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Radio Shows</a>
                    <a href="/pages/about" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About Us</a>
                    <a href="/pages/contact" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Contact Us</a>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>
        

        <div className="px-6 py-2 text-gray-100 bg-gray-800">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row"><a href="/"
                className="text-2xl font-bold">1AfricaradioTv</a>
            <p className="mt-2 md:mt-0">All rights reserved &copy; 2024. | Dev By Macsoft</p>
            <div className="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0">
            
           
                 
                <a href='https://wa.me/27789349311'>     
                <img src="/social/whatsapp.svg" alt="WhatsApp" className="w-10 h-10"/>

                </a>
                
                <a href="https://www.facebook.com/profile.php?id=100086667417275" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/fb.svg" alt="facebook" className="w-10 h-10"/>

                </a>
                <a href="https://x.com/1africaradiotv" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/twitter.svg" alt="x" className="w-10 h-10"/>

                </a>
                <a href="https://www.youtube.com/@1africaradiotv" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/youtube.svg" alt="youtube" className="w-10 h-10"/>

                </a>                
                <a href="https://www.instagram.com/1africaradio_tv/" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/instagram.webp" alt="instagram" className="w-10 h-10"/>

                </a>
            </div>
        </div>
        </div>
        
   

    </div>
</footer>
    </div>
  )
}

export default Footer
