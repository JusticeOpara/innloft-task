import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeActions } from '../store/darkmode-slice';


export default function DarkMode() {

    
    return (
        <div className='p-2 w-fit mx-auto  md:w-full '>
            <button onClick={handleToggle}></button>

        </div>
    )
}

{/* {handleToggle === 'dark' ? (
                <div className='flex items-center  cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}> <HiSun className='text-primary text-center  md:text-2xl mr-2' /> Light Mode  </div>
            ) : (<div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}> <HiMoon className='text-primary md:text-2xl mr-2' /> Dark Mode </div>)
            } */}