import React from 'react'
import ReactPlayer from 'react-player/youtube';

export default function Videoplayer({productVideo}) {
    console.log(productVideo,"---videodfghdfhfdh")
    return (
        <>
            <div className="flex w-full h-[400px] max-sm:h-[200px] justify-center bg-orange-200   rounded items-center">
                {/* <ReactPlayer className="w-[715px] max-sm:hidden smre:w-[100%] max-sm:w-[10px] h-[400px] flex-shrink-0 "  url={productVideo} /> */}
            </div>
           
        </>
    )
}