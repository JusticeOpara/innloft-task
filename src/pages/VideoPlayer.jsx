import React from 'react'
import ReactPlayer from 'react-player/youtube';

export default function Videoplayer({productVideo}) {
    console.log(productVideo,"---videodfghdfhfdh")
    return (
        <>
            <div className="flex w-full h-[400px] justify-center  max-sm:hidden rounded items-center">
                <ReactPlayer className="w-[715px] smre:w-[100%] max-sm:w-[10px] h-[400px] flex-shrink-0 "  url={productVideo} />
            </div>
           
        </>
    )
}