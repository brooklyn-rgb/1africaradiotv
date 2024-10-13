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
     
<footer className="bg-black py-8 text-white dark:bg-gray-900 border-t border-t-[#093129]">
    <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-bold tracking-tight xl:text-2xl dark:text-white text-[#bc9c22]">1AfricaradioTv</h1>

                <div className='flex justify-start py-4'>
                <iframe className='bg-[url("/music.gif")] bg-no-repeat bg-cover bg-opacity-60 text-white rounded p-4 px-4' src="https://radio3.eclipse-streaming.co.za/public/1africaradio/embed?theme=light" frame-border="0" allow-transparency="true" width={250} height={130}></iframe>
              </div>
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
                    <a href="/pages/objectives" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                    <a href="/pages/objectives" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                </div>
            </div>

            <div>
                <p className="font-bold dark:text-white">More</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="/pages/misiion" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Mission</a>
                    <a href="/about" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About Us</a>
                    <a href="/pages/contact" className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Contact Us</a>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>
        

        <div className="px-6 py-2 text-gray-100 bg-gray-800">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row"><a href="/"
                className="text-2xl font-bold">1AfricaradioTv</a>
            <p className="mt-2 md:mt-0">All rights reserved &copy; 2024.</p>
            <div className="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0">
            
            <a href="https://wa.me/27676659535?text=Called%20Chosen%20and%20Appointed%20BornAgain%20for%20Faith%20Mission"
                    className="mx-2 text-gray-100 hover:text-gray-400">
                    
                <img src="/social/whatsapp.svg" alt="WhatsApp" className="w-10 h-10"/>


                </a>
                
                <a href="https://www.facebook.com/reel/857884326450457" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/fb.svg" alt="facebook" className="w-10 h-10"/>

                </a>
                <a href="#" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/twitter.svg" alt="x" className="w-10 h-10"/>

                </a>
                <a href="#" className="mx-2 text-gray-100 hover:text-gray-400">
                
                <img src="/social/youtube.svg" alt="youtube" className="w-10 h-10"/>

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
