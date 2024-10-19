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

            <div className="gap-6 mt-8 mx-4 md:flex">
                <div className="md:w-full">
                    <div className="">
                  
                    <iframe width="400" height="400" src="https://www.youtube.com/embed/M045SDtBpec" frame-border="0" allow="accelerometer; autoplay;" ></iframe>
               
                    </div>
                   
                </div>
                <div className="md:w-full">
                    <div className="wrap-video">
                   <iframe width="400" height="400" src="https://www.youtube.com/embed/fIXf_DcztxU?list=TLGGZAjs5yN1Az4xOTEwMjAyNA" frame-border="0" allow="accelerometer; autoplay;"></iframe>
                   </div>
                  
                </div>
            </div>
        </div>

        <div className="gap-6 mt-8 mx-4 md:flex">
            <div className="md:w-full">
                <div className="wrap-video">
                <iframe width="400" height="400" src="https://www.youtube.com/embed/VLQ8s4JJlzg" title="1 Africa Radio TV promk" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow-fullscreen></iframe>
               
                </div>
              
            </div>
            <div className="md:w-full">
                <div className="wrap-video">
                <iframe width="400" height="400" src="https://www.youtube.com/embed/7WwoiApSeEQ" title="1 Africa Radio TV promk" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow-fullscreen></iframe>
               
                </div>
              
            </div>
        </div>
        <h2 className="font-black text-6xl text-white text-center uppercase my-16 hover:bg-white hover:text-black hover:rounded-full hover:px-6">
            Streaming
        </h2>
    </div>
</div>

</div>
    
  )
}
