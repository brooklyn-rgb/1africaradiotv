import React from 'react'

export default function Video() {
  return (
    <div>

<div className="relative flex min-h-screen flex-col bg-black">
    <div className="min-h-28">
        <div className="mx-auto py-4">
            <h2 className="font-black text-7xl text-white uppercase text-center py-16">
                featured stream
            </h2>

            <section>
      <h1 className="text-3xl font-bold mb-10 text-white px-8">| 1AfricaRadioTV </h1>
      <div className="grid sm:grid-cols-4 gap-8 grid-cols-1 px-8 flex justify-center">
        <div>
          <div className="bg-cover bg-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/M045SDtBpec" 
  title="YouTube video player" 
  frame-border="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allow-fullscreen></iframe>
          </div>
      
      </div>
        <div>
          <div className="bg-cover g-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/IXf_DcztxU" 
  title="YouTube video player" 
  frame-border="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allow-fullscreen></iframe>
          </div>
       
        </div>
        <div>
          <div className="bg-cover bg-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/VLQ8s4JJlzg" 
  title="YouTube video player" 
  frame-border="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allow-fullscreen></iframe>
          </div>
       
       </div>
        <div>
          <div className=" bg-cover bg-no-repeat h-44">
          <iframe 
  width="350" 
  height="315" 
  src="https://www.youtube.com/embed/UopPawQ4oMI" 
  title="YouTube video player" 
  frame-border="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allow-fullscreen></iframe>
          </div>
        
        </div>
      </div>
   </section>    
            <div className='py-16'>
        <h2 className="font-black text-6xl text-white text-center uppercase my-16 hover:bg-white hover:text-black hover:rounded-full hover:px-6">
            Streaming
        </h2>
        </div>
    </div>
</div>

</div>
</div>
    
  )
}
