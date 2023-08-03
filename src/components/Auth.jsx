import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useNavigate } from "react-router-dom";

export default function Auth() {

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

        <div className="m-auto w-[40%] h-[108vh] gap-2.5 mt-2 max-sm:m-0 max-sm:w-[45%]  inline-block">


            <div className="min-h-[542px] px-5 pt-5 pb-10 bg-white border rounded-md">
                <div className="flex gap-2 items-center"><span className="text-base leading-5 text-gray-700 font-semibold">Login</span>
                    <div className="bg-gray-300 h-[1px] grow"></div>
                </div>
                <form className="mt-5 mb-7.5" onSubmit={handleSubmit}>
                    <fieldset className="p-0">
                        <div className="w-full mb-5">
                            <label className="block text-sm font-medium mb-2.5 text-gray-500">E-Mail</label>
                            <div className="flex flex-col grow"><div className="grow flex border bg-white relative overflow-hidden border-gray-300 focus-within:border-primary rounded-md">
                                <div className="flex grow items-center rounded overflow-hidden">
                                    <input className="text-sm py-1.5 px-2 w-full border-none bg-transparent focus:ring-transparent focus:shadow-none focus:outline-none focus:border-none" type="text" name="email" placeholder="Enter your e-mail address" />
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="w-full mb-5"><label className="block text-sm font-medium mb-2.5 text-gray-500">Password</label>
                            <div className="flex flex-col grow">
                                <div className="grow flex border bg-white relative overflow-hidden border-gray-300 focus-within:border-primary rounded-md">
                                    <div className="flex grow items-center rounded overflow-hidden">
                                        <input className="text-sm py-1.5 px-2 w-full border-none bg-transparent focus:ring-transparent focus:shadow-none focus:outline-none focus:border-none" type="password" name="password" placeholder="Enter your password" /></div>
                                    <div className="right pr-2 flex items-center cursor-pointer rounded-tr rounded-br overflow-hidden"><i className="icon-inno icon-inno_visible text-lg"></i></div>
                                </div>
                            </div>
                        </div></fieldset>
                    <button onClick={handleClick} className="bg-[#272e71] inline-flex items-center justify-center border shadow-sm transition ease-in-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed gap-2 whitespace-nowrap px-2.5 py-1.5 text-sm bg-primary hover:opacity-90 text-white border-transparent rounded-md w-full h-[30px] leading-6 mb-2.5" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M26 30H14a2 2 0 0 1-2-2v-3h2v3h12V4H14v3h-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2Z" /><path fill="currentColor" d="M14.59 20.59L18.17 17H4v-2h14.17l-3.58-3.59L16 10l6 6l-6 6l-1.41-1.41z" /></svg>
                        Login
                        </button>

                    <div className="flex justify-between">
                        <div className="flex items-center gap-2"><label for="checkbox-lkv9yuqf" className="text-xs text-gray-500 order-last">Remember me</label>
                            <input type="checkbox" className="cursor-pointer focus:ring-primary h-4 w-4 text-primary border-primary rounded" name="rememberMe" id="checkbox-lkv9yuqf" /></div>
                        <button className="inline-flex items-center justify-center border transition ease-in-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed gap-2 whitespace-nowrap px-2 py-1 text-xs text-primary opacity-85 hover:opacity-100 border-transparent shadow-none rounded-md leading-[14px]">Forgot your password?</button>
                    </div>
                </form>
                <div className="flex gap-2 items-center"><span className="text-base leading-5 text-gray-700 font-semibold">Alternative Login</span>
                    <div className="bg-gray-300 h-[1px] grow"></div>
                </div>
                <div className="mt-5 flex flex-col gap-2.5">
                    <a href="https://oauth.innoloft.com/?ref=aHR0cHM6Ly9pbm5vbG9mdC5jb20vbG9naW4=&amp;language=en&amp;appId=7648562&amp;serviceId=1" className="w-full flex items-center justify-center p-1.5 rounded-md border border-primary text-sm text-primary cursor-pointer hover:opacity-80">
                        <img src="https://img.innoloft.com/login/logos/google-logo.svg" alt="Google" className="w-5 mr-[5px]" />Login with Google</a><a href="https://oauth.innoloft.com/?ref=aHR0cHM6Ly9pbm5vbG9mdC5jb20vbG9naW4=&amp;language=en&amp;appId=7648562&amp;serviceId=2" className="w-full flex items-center justify-center p-1.5 rounded-md border border-primary text-sm text-primary cursor-pointer hover:opacity-80">
                        <img src="https://img.innoloft.com/login/logos/linkedin-logo.svg" alt="LinkedIn" className="w-5 mr-[5px]" />Login with LinkedIn</a></div>
                <div className="mt-7.5">
                    <div className="flex gap-2 items-center"><span className="text-base leading-5 text-gray-700 font-semibold">No account yet?</span><div className="bg-gray-300 h-[1px] grow">
                    </div>
                    </div>
                    <button className="inline-flex items-center justify-center border shadow-sm transition ease-in-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed gap-2 whitespace-nowrap px-2.5 py-1.5 text-sm hover:bg-gray-100 text-primary border-primary rounded-md w-full h-[30px] leading-6 mt-[15px]"><i className="icon-inno icon-inno_register-number mr-[5px]"></i>Register</button></div></div>

        </div>

    );
};



