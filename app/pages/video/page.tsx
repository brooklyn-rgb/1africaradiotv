import React from 'react'

export default function Video() {
  return (
    <div>

<div className="relative flex min-h-screen flex-col bg-black">
    <div className="min-h-28">
        <div className="mx-auto py-4">
            <h2 className="font-black text-9xl text-white uppercase text-center py-16">
                featured work
            </h2>

            <div className="gap-6 mt-8 mx-4 md:flex">
                <div className="md:w-1/2">
                    <div className="wrap-video">
                    <video width="320" height="240" controls preload="none">
      <source src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
               
                    </div>
                    <span className="pt-4 grid grid-cols-6 gap-4">
                        <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                            bodega x new balance
                        </span>
                        <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                            <span className="">
                                fashion/retail
                            </span>
                        </span>
                    </span>
                    <span className="block text-slate-400 text-xs uppercase font-mono">
                            the trail less taken
                    </span>
                </div>
                <div className="md:w-1/2">
                    <div className="wrap-video">
                    <video width="320" height="240" controls preload="none">
      <source src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
                    </div>
                    <span className="pt-4 grid grid-cols-6 gap-4">
                        <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                            bodega x hoka
                        </span>
                        <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                            <span className="">
                                music video
                            </span>
                        </span>
                    </span>
                    <span className="block text-slate-400 text-xs uppercase font-mono">
                            the world at large
                    </span>
                </div>
            </div>
        </div>

        <div className="gap-6 mt-8 mx-4 md:flex">
            <div className="md:w-1/2">
                <div className="wrap-video">
                <video width="320" height="240" controls preload="none">
      <source src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
                </div>
                <span className="pt-4 grid grid-cols-6 gap-4">
                    <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                        juno
                    </span>
                    <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                        <span className="">
                            music video 
                        </span>
                    </span>
                </span>
                <span className="block text-slate-400 text-xs uppercase font-mono">
                        grandma cabbage 
                </span>
            </div>
            <div className="md:w-1/2">
                <div className="wrap-video">
                <video width="320" height="240" controls preload="none">
      <source src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
                </div>
                <span className="pt-4 grid grid-cols-6 gap-4">
                    <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                        cala x public 
                    </span>
                    <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                        <span className="">
                            music video
                        </span>
                    </span>
                </span>
                <span className="block text-slate-400 text-xs uppercase font-mono">
                        transportation the perfect pants
                </span>
            </div>
        </div>
        <h2 className="font-black text-7xl text-white text-center uppercase my-16 hover:bg-white hover:text-black hover:rounded-full hover:px-6">
            view select work
        </h2>
    </div>
</div>

    </div>
  )
}
