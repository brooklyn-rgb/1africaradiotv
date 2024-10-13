import React from 'react'

export default function Streaming() {
  return (
    <div>

<div className="bg-black w-full h-full h-min-screen p-8">
    <div className="container m-auto">
        <div className="w-full z-0 relative md:min-h-[41rem]">
            <div className="w-full h-full relative z-0 rounded-2xl">
            <video width="full" height="240" controls preload="autoPlay">
      <source src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&amp;signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
             </div>
        </div>
    </div>
</div>
    </div>
  )
}
