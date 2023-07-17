import React from 'react'
import ReactPlayer from 'react-player/youtube';

export default function Videoplayer({productVideo}) {
    console.log(productVideo,"---videodfghdfhfdh")
    return (
        <>
            <div className="flex w-full bg-amber-200 h-[400px] justify-center rounded items-center">
                <ReactPlayer className="w-[715px] h-[400px] flex-shrink-0"  url={productVideo} />
            </div>
           
        </>
    )
}