import React from 'react'
import ReactPlayer from 'react-player/youtube';

export default function Videoplayer({productVideo}) {
    console.log(productVideo,"---videodfghdfhfdh")
    return (
        <>
            <div className="flex w-full h-[400px] max-sm:h-[200px] justify-center  rounded items-center">
             <ReactPlayer 
             className="lg:w-[715px]  sme:h-[100%] max-sm:w-[10px]  max-sm:h-[10%] h-[400px] "  url={productVideo} /> 
            </div>
           
        </>
    )
}