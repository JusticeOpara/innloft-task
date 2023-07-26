import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useNavigate } from "react-router-dom";

const Auth = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authActions.loggedIn())
    }

    const handleClick = () => {
        navigate('/product');
    }

    return (

        <div className="m-auto  w-[40%] max-sm:m-0 max-sm:w-[45%] ">
            <form onSubmit={handleSubmit} className="rounded-xl bg-white shadow-xl p-3  ">

                <div className="">
                    <img src="https://img.innoloft.de/logo.svg"  className="w-28" alt="Innos logo" />
                    <h2 className="mb-3 text-2xl text-[#374151] font-bold max-sm:text-sm">Check in to unlock the Products of Innos.</h2>
                </div>

                {/* <div className="m"> */}
                    <button onClick={handleClick} className=" h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                        
                        <div className="relative flex items-center space-x-4 justify-center">

                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-xl transition duration-300 group-hover:text-blue-600 sm:text-base">Click Here</span>
                        </div>

                    </button>
                {/* </div> */}

            </form>

        </div>

    );
};

export default Auth;