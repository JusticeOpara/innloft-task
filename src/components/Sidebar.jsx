import React from 'react'
import Pics from "../assets/profile.png"
import homeIcon from "../assets/home-icon.svg"
import memberIcon from "../assets/inno_group.svg"
import orgIcon from "../assets/inno_organizations.svg"
import marketIcon from "../assets/market-stall-outline.svg"
import eventsIcon from "../assets/baseline-event-busy.svg"
import requestIcon from "../assets/speaker.svg"
import projectIcon from "../assets/projects.svg"


export default function Sidebar() {
    return (
        <>

            <div className='bg-white w-[20rem]  sticky block  px-1.5 top-0 overflow-hidden '>

                <div className='flex flex-col h-[calc(100vh-7em)] w-full justify-between items-center '>
                    <div className="max-h[140px] relative mt-2 overflow-y-auto   ">
                        <div className=' flex gap-2 items-center px-1.5 bg-white'>

                            <img src={Pics} className="w-20 object-cover h-20 rounded-full " alt='pic' />

                            <div className="flex flex-col justify-center text-center ">
                                <span className='text-[18px]  max-sm:text-[8px] font-black text-[#374151]'>Svenb Pietsch</span>
                                <h1 className='text-[18px]  max-sm:text-[7px] font-medium text-[#374151]'> Innoloft GmbH</h1>
                            </div>

                        </div>

                        <div className='mb-16 mt-4 cursor-pointer max-md:mb-0  max-md:mt-0 px-1.5 '>
                            <ul className='list-none '>

                                <li className='py-0.5 w-[250px] '>
                                    <a class="w-full relative flex items-center justify-center py-[13px] px-2.5 bg-transparent rounded-xl border-0 border-[#d1d5db] text-[#111827] text-xs font-normal leading-none no-underline cursor-pointer transition duration-[250] max-md:text-sm hover:no-underline hover:text-[#111827] hover:bg-[#d1d5db]"
                                        href="/home">

                                        <div class="w-full flex flex-wrap gap-y-1 justify-between text-left">
                                            <div class="flex items-center gap-2">
                                                <img src={homeIcon} className='w-4' alt="home-icon" />

                                                <span class="hover:no-underline text-base font-medium">Home</span>
                                            </div>

                                        </div>
                                    </a>
                                </li>

                                <li className='py-0.5 w-[250px] '>
                                    <a class="w-full relative flex items-center justify-center py-[13px] px-2.5 bg-transparent rounded-xl border-0 border-[#d1d5db] text-[#111827] text-xs font-normal leading-none no-underline cursor-pointer transition duration-[250] max-md:text-sm hover:no-underline hover:text-[#111827] hover:bg-[#d1d5db]"
                                        href="/home">

                                        <div class="w-full flex flex-wrap gap-y-1 justify-between text-left">
                                            <div class="flex items-center gap-2">
                                                <img src={memberIcon} className='w-4' alt="home-icon" />

                                                <span class="hover:no-underline text-base font-medium">Memebers</span>
                                            </div>
                                            <div class="flex items-center gap-2 ml-5"></div>
                                        </div>
                                    </a>
                                </li>

                                <li className='py-0.5 w-[250px] '>
                                    <a class="w-full relative flex items-center justify-center py-[13px] px-2.5 bg-transparent rounded-xl border-0 border-[#d1d5db] text-[#111827] text-xs font-normal leading-none no-underline cursor-pointer transition duration-[250] max-md:text-sm hover:no-underline hover:text-[#111827] hover:bg-[#d1d5db]"
                                        href="/home">

                                        <div class="w-full flex flex-wrap gap-y-1 justify-between text-left">
                                            <div class="flex items-center gap-2">
                                                <img src={marketIcon} className='w-4' alt="home-icon" />

                                                <span class="hover:no-underline text-base font-medium">Offer</span>
                                            </div>
                                            <div class="flex items-center gap-2 ml-5"></div>
                                        </div>
                                    </a>
                                </li>

                                <li className='py-0.5 w-[250px] '>
                                    <a class="w-full relative flex items-center justify-center py-[13px] px-2.5 bg-transparent rounded-xl border-0 border-[#d1d5db] text-[#111827] text-xs font-normal leading-none no-underline cursor-pointer transition duration-[250] max-md:text-sm hover:no-underline hover:text-[#111827] hover:bg-[#d1d5db]"
                                        href="/home">

                                        <div class="w-full flex flex-wrap gap-y-1 justify-between text-left">
                                            <div class="flex items-center gap-2">
                                                <img src={requestIcon} className='w-4' alt="home-icon" />

                                                <span class="hover:no-underline text-base font-medium">Requests</span>
                                            </div>
                                            <div class="flex items-center gap-2 ml-5"></div>
                                        </div>
                                    </a>
                                </li>
                                <li className='py-0.5 w-[250px] '>
                                    <a class="w-full relative flex items-center justify-center py-[13px] px-2.5 bg-transparent rounded-xl border-0 border-[#d1d5db] text-[#111827] text-xs font-normal leading-none no-underline cursor-pointer transition duration-[250] max-md:text-sm hover:no-underline hover:text-[#111827] hover:bg-[#d1d5db]"
                                        href="/home">

                                        <div class="w-full flex flex-wrap gap-y-1 justify-between text-left">
                                            <div class="flex items-center gap-2">
                                                <img src={orgIcon} className='w-4' alt="home-icon" />

                                                <span class="hover:no-underline text-base font-medium">Organization</span>
                                            </div>
                                            <div class="flex items-center gap-2 ml-5"></div>
                                        </div>
                                    </a>
                                </li>

                                <li className='py-0.5 w-[250px] '>
                                    <a class="w-full relative flex items-center justify-center py-[13px] px-2.5 bg-transparent rounded-xl border-0 border-[#d1d5db] text-[#111827] text-xs font-normal leading-none no-underline cursor-pointer transition duration-[250] max-md:text-sm hover:no-underline hover:text-[#111827] hover:bg-[#d1d5db]"
                                        href="/home">

                                        <div class="w-full flex flex-wrap gap-y-1 justify-between text-left">
                                            <div class="flex items-center gap-2">
                                                <img src={eventsIcon} className='w-4' alt="home-icon" />

                                                <span class="hover:no-underline text-base font-medium">Events</span>
                                            </div>
                                            <div class="flex items-center gap-2 ml-5"></div>
                                        </div>
                                    </a>
                                </li>

                                <li className='py-0.5 w-[250px] '>
                                    <a class="w-full relative flex items-center justify-center py-[13px] px-2.5 bg-transparent rounded-xl border-0 border-[#d1d5db] text-[#111827] text-xs font-normal leading-none no-underline cursor-pointer transition duration-[250] max-md:text-sm hover:no-underline hover:text-[#111827] hover:bg-[#d1d5db]"
                                        href="/home">

                                        <div class="w-full flex flex-wrap gap-y-1 justify-between text-left">
                                            <div class="flex items-center gap-2">
                                                <img src={projectIcon} className='w-4' alt="home-icon" />

                                                <span class="hover:no-underline text-base font-medium">Projects</span>
                                            </div>
                                            <div class="flex items-center gap-2 ml-5"></div>
                                        </div>
                                    </a>
                                </li>

                               
                                
                            </ul>

                        </div>

                    </div>

                </div>
                
                
                <div className="bg-gray-300 h-[1px]"></div>

                <div class="flex flex-row w-full  justify-evenly items-center mt-4">

                    <a className="text-sm font-medium" href="/data-privacy">Data Privacy </a>
                    <div>
                        <a className="text-sm font-medium" href="https://innoloft.com/public" target="_blank" rel="noopener noreferrer">Powered by LoftOS</a>
                    </div>

                </div>

            </div>


        </>
    )
}

