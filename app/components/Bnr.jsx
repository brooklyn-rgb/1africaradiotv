"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const Bnr = () => {
  const form = useRef();

    const [loading, setLoading] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
      .sendForm('service_gxh60rq', 'template_8l44bwg', form.current, {
        publicKey: 'eylwBqCVMhgEbttld',
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
    <div className='bg-black'>
   
<div className="2xl:mx-auto 2xl:container mx-4 py-16">
  
  <div className="w-full relative flex items-center justify-center">
    <img src="/team2/n.gif" alt="1africaradiotv" className="w-full h-full absolute z-0 hidden xl:block" />
    <img src="/team2/n.gif" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
    <img src="/team2/n.gif" alt="1africaradiotv" className="w-full h-full absolute z-0 sm:hidden" />
    <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
      <h1 className="text-4xl font-semibold leading-9 text-white text-center">Don’t miss out!</h1>
      <h2 className="text-4xl font-semibold leading-9 text-red-500 text-center">No.1 Hit Singles 🎶 </h2>
      <p className="text-base leading-normal text-center text-white mt-6">
        Subscribe to our newsletter to stay in the loop. 
      </p>
      <form ref={form} onSubmit={sendEmail} className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
        <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" type="text" name="email" placeholder="Email Address" />
        <input btn className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75" type="submit" value="Subscribe" />      
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Bnr
