import React, { useState } from "react";
import getAppConfiguration from "../config";
import Profile from "../assets/profile.png";
import searchIcon from "../assets/inno_search.svg";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.svg" 

export default function () {
    const [isOpen, setIsOpen] = useState(false)
    const [openNotification, setOpenNotification] = useState(false)
    const [changeLanguage, setChangeLanguage] = useState(false)

    const configuration = getAppConfiguration();
    console.log(configuration, "-getAppConfigration")
    // Apply the configuration to your components

    const headerStyle = {
        backgroundColor: configuration.mainColor,
        height: configuration.height,
        width: configuration.width,
        display: configuration.display,
    };


    return (

        <header style={headerStyle} >
            <Link to="/product">
                <img src={configuration.logo}  className="w-[140px] hr-[26.285715103149414px] absolute top-[14px] left-[30px] py-[5px] object-contain px-0 bg-white " 
                   alt="Logo" />
            </Link>


            <input type="text" placeholder="Enter interests, keyword,company name, etc"
                className=" bg-white absolute w-[500px]  h-[27px] top-[14px] max-xl:left-[220px] max-xl:w-[400px] left-[320px]  rounded pl-2 focus:outline-none placeholder-black border-[#D1D5DB] max-md:hidden" />

            <img src={searchIcon} className="absolute top-5 right-[470px] max-md:hidden mx-xl:right-[210px] " alt="search" />

            <div className="flex items-center justify-between flex-shrink-0 w-[150px] h-[25px] top-[14px] right-[30px] absolute max-md:hidden ">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_10498_416)">
                        <path d="M4.3887 9.27734C4.19092 9.27734 3.99758 9.2187 3.83313 9.10881C3.66868 8.99893 3.54051 8.84275 3.46482 8.66003C3.38914 8.4773 3.36933 8.27623 3.40792 8.08225C3.4465 7.88827 3.54174 7.71009 3.6816 7.57024C3.82145 7.43039 3.99963 7.33514 4.19361 7.29656C4.38759 7.25797 4.58866 7.27778 4.77139 7.35346C4.95411 7.42915 5.11029 7.55733 5.22017 7.72177C5.33005 7.88622 5.3887 8.07956 5.3887 8.27734C5.38846 8.54249 5.28303 8.7967 5.09555 8.98419C4.90806 9.17167 4.65385 9.27711 4.3887 9.27734Z" fill="white" />
                        <path d="M7.7222 9.27734C7.52442 9.27734 7.33108 9.2187 7.16663 9.10881C7.00218 8.99893 6.87401 8.84275 6.79832 8.66003C6.72263 8.4773 6.70283 8.27623 6.74141 8.08225C6.78 7.88827 6.87524 7.71009 7.01509 7.57024C7.15494 7.43039 7.33313 7.33514 7.52711 7.29656C7.72109 7.25797 7.92216 7.27778 8.10488 7.35346C8.28761 7.42915 8.44379 7.55733 8.55367 7.72177C8.66355 7.88622 8.7222 8.07956 8.7222 8.27734C8.72196 8.54249 8.61653 8.7967 8.42904 8.98419C8.24156 9.17167 7.98734 9.27711 7.7222 9.27734Z" fill="white" />
                        <path d="M11.0557 9.27734C10.8579 9.27734 10.6646 9.2187 10.5002 9.10881C10.3357 8.99893 10.2075 8.84275 10.1318 8.66003C10.0562 8.4773 10.0364 8.27623 10.0749 8.08225C10.1135 7.88827 10.2088 7.71009 10.3486 7.57024C10.4885 7.43039 10.6667 7.33514 10.8606 7.29656C11.0546 7.25797 11.2557 7.27778 11.4384 7.35346C11.6211 7.42915 11.7773 7.55733 11.8872 7.72177C11.9971 7.88622 12.0557 8.07956 12.0557 8.27734C12.0555 8.54249 11.9501 8.7967 11.7626 8.98419C11.5751 9.17167 11.3209 9.27711 11.0557 9.27734Z" fill="white" />
                        <path d="M8 16H2.1665C2.03389 16 1.90671 15.9473 1.81295 15.8536C1.71918 15.7598 1.6665 15.6326 1.6665 15.5C1.6665 15.3674 1.71918 15.2402 1.81295 15.1465C1.90671 15.0527 2.03389 15 2.1665 15H8C9.38447 15 10.7378 14.5895 11.889 13.8203C13.0401 13.0511 13.9373 11.9579 14.4672 10.6788C14.997 9.39971 15.1356 7.99224 14.8655 6.63437C14.5954 5.2765 13.9287 4.02922 12.9497 3.05026C11.9708 2.07129 10.7235 1.4046 9.36563 1.13451C8.00776 0.86441 6.6003 1.00303 5.32122 1.53285C4.04213 2.06266 2.94888 2.95987 2.17971 4.11101C1.41054 5.26216 1 6.61553 1 8V13.833C1 13.9656 0.947322 14.0928 0.853553 14.1866C0.759785 14.2803 0.632608 14.333 0.5 14.333C0.367392 14.333 0.240215 14.2803 0.146447 14.1866C0.0526784 14.0928 0 13.9656 0 13.833V8C0 6.41775 0.469192 4.87103 1.34824 3.55544C2.22729 2.23985 3.47672 1.21447 4.93853 0.608967C6.40034 0.00346625 8.00887 -0.15496 9.56072 0.153721C11.1126 0.462403 12.538 1.22433 13.6569 2.34315C14.7757 3.46197 15.5376 4.88743 15.8463 6.43928C16.155 7.99113 15.9965 9.59966 15.391 11.0615C14.7855 12.5233 13.7602 13.7727 12.4446 14.6518C11.129 15.5308 9.58225 16 8 16Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_10498_416">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <span className="flex items-center gap-1 text-center" onClick={() => setChangeLanguage((prev) => !prev)}>EN

                    {!changeLanguage ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_10498_424)">
                                <path d="M7.99998 12.25C7.93431 12.2501 7.86927 12.2372 7.8086 12.2121C7.74793 12.1869 7.69284 12.1501 7.64648 12.1035L0.14648 4.60354C0.0987245 4.55742 0.0606334 4.50224 0.0344289 4.44124C0.00822435 4.38024 -0.00556876 4.31463 -0.00614567 4.24824C-0.00672258 4.18185 0.00592827 4.11601 0.0310687 4.05456C0.0562092 3.99312 0.0933357 3.93729 0.140282 3.89034C0.187228 3.8434 0.243054 3.80627 0.304503 3.78113C0.365951 3.75599 0.431791 3.74334 0.49818 3.74392C0.56457 3.74449 0.63018 3.75829 0.691182 3.78449C0.752184 3.81069 0.807356 3.84879 0.85348 3.89654L7.99998 11.043L15.1465 3.89654C15.1926 3.84879 15.2478 3.81069 15.3088 3.78449C15.3698 3.75829 15.4354 3.74449 15.5018 3.74392C15.5682 3.74334 15.634 3.75599 15.6955 3.78113C15.7569 3.80627 15.8127 3.8434 15.8597 3.89034C15.9066 3.93729 15.9438 3.99312 15.9689 4.05456C15.994 4.11601 16.0067 4.18185 16.0061 4.24824C16.0055 4.31463 15.9917 4.38024 15.9655 4.44124C15.9393 4.50224 15.9012 4.55742 15.8535 4.60354L8.35348 12.1035C8.30712 12.1501 8.25203 12.1869 8.19136 12.2121C8.13069 12.2372 8.06565 12.2501 7.99998 12.25Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_10498_424">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="white">
                            <path fill="currentColor" fill-rule="evenodd" d="M11.512 8.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 9.987l-6.512 5.581a.75.75 0 1 1-.976-1.138l7-6Z" clip-rule="evenodd" />
                        </svg>
                    )}


                </span>
                {changeLanguage &&
                    <div class="absolute right-[7rem] z-10 mt-[8.5rem] w-26 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">

                        <div class="py-1" role="none">

                            <a href="#" class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">English</a>
                            <a href="#" class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Spanish</a>

                        </div>

                    </div>
                }



                {/* notifaction */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={() => setOpenNotification((prevn) => !prevn)}>
                    <g clipPath="url(#clip0_10498_421)">
                        <path d="M7.99999 15.9824C7.32856 15.9798 6.68103 15.7329 6.17837 15.2878C5.67571 14.8426 5.35231 14.2297 5.26859 13.5635C5.25963 13.498 5.26375 13.4314 5.28071 13.3675C5.29766 13.3036 5.32712 13.2437 5.36738 13.1912C5.40764 13.1388 5.45789 13.0949 5.51524 13.062C5.57259 13.0291 5.63588 13.0079 5.70147 12.9996C5.76706 12.9914 5.83364 12.9962 5.89735 13.0138C5.96106 13.0315 6.02065 13.0616 6.07265 13.1024C6.12466 13.1432 6.16805 13.1939 6.20033 13.2516C6.23261 13.3093 6.25312 13.3728 6.26069 13.4385C6.31159 13.864 6.51671 14.2561 6.83724 14.5406C7.15776 14.825 7.57144 14.9821 7.99999 14.9821C8.42854 14.9821 8.84222 14.825 9.16275 14.5406C9.48327 14.2561 9.68839 13.864 9.73929 13.4385C9.74686 13.3728 9.76737 13.3093 9.79965 13.2516C9.83193 13.1939 9.87532 13.1432 9.92733 13.1024C9.97933 13.0616 10.0389 13.0315 10.1026 13.0138C10.1663 12.9962 10.2329 12.9914 10.2985 12.9996C10.3641 13.0079 10.4274 13.0291 10.4847 13.062C10.5421 13.0949 10.5923 13.1388 10.6326 13.1912C10.6729 13.2437 10.7023 13.3036 10.7193 13.3675C10.7362 13.4314 10.7403 13.498 10.7314 13.5635C10.6477 14.2297 10.3243 14.8426 9.82161 15.2878C9.31895 15.7329 8.67142 15.9798 7.99999 15.9824Z" fill="white" />
                        <path d="M15.5 12.586H0.5C0.367392 12.586 0.240215 12.5333 0.146447 12.4395C0.0526784 12.3457 0 12.2186 0 12.086C0 11.9533 0.0526784 11.8262 0.146447 11.7324C0.240215 11.6386 0.367392 11.586 0.5 11.586C0.967607 11.5855 1.41593 11.3996 1.74659 11.0689C2.07725 10.7383 2.26322 10.29 2.2637 9.82235V5.57715C2.2664 4.36593 2.64256 3.18501 3.34089 2.19536C4.03922 1.20571 5.02575 0.455485 6.166 0.0469529C6.22832 0.0226152 6.29489 0.0110314 6.36176 0.0128878C6.42864 0.0147442 6.49446 0.030003 6.55534 0.0577603C6.61621 0.0855177 6.67089 0.125209 6.71615 0.174483C6.7614 0.223758 6.79631 0.281613 6.81879 0.344622C6.84128 0.407631 6.8509 0.474513 6.84707 0.541306C6.84324 0.608098 6.82605 0.673444 6.79651 0.733471C6.76697 0.793498 6.72568 0.846986 6.67509 0.890767C6.62451 0.934549 6.56565 0.967732 6.502 0.988353C5.55585 1.32737 4.73724 1.94988 4.15774 2.77105C3.57825 3.59222 3.26605 4.5721 3.2637 5.57715V9.82235C3.26454 10.4668 3.03882 11.0911 2.626 11.586H13.374C12.9612 11.0911 12.7355 10.4668 12.7363 9.82235V5.57715C12.734 4.5721 12.4218 3.59222 11.8423 2.77105C11.2628 1.94988 10.4442 1.32737 9.498 0.988353C9.37686 0.941042 9.27891 0.84839 9.22495 0.730057C9.171 0.611725 9.16527 0.477024 9.20899 0.354537C9.2527 0.232051 9.34243 0.131418 9.45912 0.0739923C9.5758 0.0165667 9.71028 0.00686751 9.834 0.0469529C10.9742 0.455473 11.9607 1.20567 12.6591 2.19527C13.3574 3.18488 13.7336 4.36576 13.7363 5.57695V9.82235C13.7368 10.29 13.9228 10.7383 14.2534 11.0689C14.5841 11.3996 15.0324 11.5855 15.5 11.586C15.6326 11.586 15.7598 11.6386 15.8536 11.7324C15.9473 11.8262 16 11.9533 16 12.086C16 12.2186 15.9473 12.3457 15.8536 12.4395C15.7598 12.5333 15.6326 12.586 15.5 12.586Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_10498_421">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                {openNotification &&
                    <div class="absolute right-[5rem] z-10 mt-[7.5rem] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">

                        <div class="py-1" role="none">
                            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">You dont have any notifaction boss!</a>

                        </div>

                    </div>
                }

                <img src={Profile} className="rounded-[50%] w-[25px]  stroke-[2px] stroke-white" alt="profile" />




                <span onClick={() => setIsOpen((prev) => !prev)}>

                    {!isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_10498_424)">
                                <path d="M7.99998 12.25C7.93431 12.2501 7.86927 12.2372 7.8086 12.2121C7.74793 12.1869 7.69284 12.1501 7.64648 12.1035L0.14648 4.60354C0.0987245 4.55742 0.0606334 4.50224 0.0344289 4.44124C0.00822435 4.38024 -0.00556876 4.31463 -0.00614567 4.24824C-0.00672258 4.18185 0.00592827 4.11601 0.0310687 4.05456C0.0562092 3.99312 0.0933357 3.93729 0.140282 3.89034C0.187228 3.8434 0.243054 3.80627 0.304503 3.78113C0.365951 3.75599 0.431791 3.74334 0.49818 3.74392C0.56457 3.74449 0.63018 3.75829 0.691182 3.78449C0.752184 3.81069 0.807356 3.84879 0.85348 3.89654L7.99998 11.043L15.1465 3.89654C15.1926 3.84879 15.2478 3.81069 15.3088 3.78449C15.3698 3.75829 15.4354 3.74449 15.5018 3.74392C15.5682 3.74334 15.634 3.75599 15.6955 3.78113C15.7569 3.80627 15.8127 3.8434 15.8597 3.89034C15.9066 3.93729 15.9438 3.99312 15.9689 4.05456C15.994 4.11601 16.0067 4.18185 16.0061 4.24824C16.0055 4.31463 15.9917 4.38024 15.9655 4.44124C15.9393 4.50224 15.9012 4.55742 15.8535 4.60354L8.35348 12.1035C8.30712 12.1501 8.25203 12.1869 8.19136 12.2121C8.13069 12.2372 8.06565 12.2501 7.99998 12.25Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_10498_424">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="white">
                            <path fill="currentColor" fill-rule="evenodd" d="M11.512 8.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 9.987l-6.512 5.581a.75.75 0 1 1-.976-1.138l7-6Z" clip-rule="evenodd" />
                        </svg>
                    )}

                </span>

                {isOpen &&
                    <div class="absolute right-0 z-10 mt-[11.5rem] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">

                        <div class="py-1" role="none">
                            <a href="#" class=" hover:bg-slate-200  text-gray-700 block px-4 py-1 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">My profile</a>
                            <a href="#" class="hover:bg-slate-200 text-gray-700 block px-4 py-1 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" class="hover:bg-slate-200 text-gray-700 block px-4 py-1 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>

                            <form method="POST" action="#" role="none">
                                <button type="submit" class="hover:bg-slate-200 text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                            </form>
                        </div>

                    </div>
                }



            </div>

    
            <img src={Menu} className="max-sm:block absolute top-2 right-[20px] max-2xl:hidden w-10 " alt="menu"/>

        </header>
    )
}