import React from 'react'
import ReactPlayer from 'react-player/youtube';

export default function Videoplayer({productVideo}) {
    console.log(productVideo,"---videodfghdfhfdh")
    return (
        <>
            <div className="flex w-full h-[400px] justify-center bg-red-200 rounded items-center">
                <ReactPlayer className="w-[715px] max-md:w-[10%] h-[400px] flex-shrink-0 "  url={productVideo} />
            </div>
           
        </>
    )
}