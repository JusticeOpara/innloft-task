import React, { useEffect, useState } from "react";
import axios from "axios";
import Videoplayer from "./VideoPlayer";
import Map from "./Map";
import { Link, useNavigate } from "react-router-dom";
import Location from "../assets/inno_location.svg";
const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/editProduct');
    }

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get("https://api-test.innoloft.com/product/6781/");
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProductData();

    }, []);

    // console.log(product
    //     , "--ProductData")

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex justify-center w-full max-sm:items-center bg-[#F9FAFB]">

            <div className="w-[80%] max-sm:w-[100%] top-[55px] gap-5 flex flex-col bg-[#F9FAFB] ">

                <div className="w-full h-[30px] bg-white  gap-5  mt-4 flex flex-row justify-between items-center">

                    <div className="flex items-center w-full  h-[24px] gap-2 bg-white rounded">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="inno_home" clip-path="url(#clip0_9003_733)">
                                <path id="Vector" d="M13 16H1.3335C1.20089 16 1.07371 15.9473 0.979943 15.8536C0.886175 15.7598 0.833496 15.6326 0.833496 15.5V7.16652C0.833472 7.10085 0.846399 7.03583 0.871538 6.97517C0.896676 6.91452 0.933533 6.85941 0.979996 6.81302L7.6465 0.146515C7.74026 0.0527798 7.86741 0.00012207 8 0.00012207C8.13258 0.00012207 8.25973 0.0527798 8.3535 0.146515L15.02 6.81302C15.0665 6.85941 15.1033 6.91452 15.1285 6.97517C15.1536 7.03583 15.1665 7.10085 15.1665 7.16652V13.8335C15.1665 13.9661 15.1138 14.0933 15.0201 14.1871C14.9263 14.2808 14.7991 14.3335 14.6665 14.3335C14.5339 14.3335 14.4067 14.2808 14.3129 14.1871C14.2192 14.0933 14.1665 13.9661 14.1665 13.8335V7.37352L8 1.20702L1.8335 7.37352V15H13C13.1326 15 13.2598 15.0527 13.3535 15.1465C13.4473 15.2402 13.5 15.3674 13.5 15.5C13.5 15.6326 13.4473 15.7598 13.3535 15.8536C13.2598 15.9473 13.1326 16 13 16Z" fill="#374151" />
                            </g>
                            <defs>
                                <clipPath id="clip0_9003_733">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#9CA3AF" />
                            </svg>


                            <p>offers</p>
                        </div>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#9CA3AF" />
                            </svg>
                            <h1 className="font-bold text-lg text-[#6B7280]">{product.name}</h1>

                        </div>

                    </div>

                    <button onClick={handleClick} className="flex justify-end h-[30px] py-[5px] px-[10px] items-center rounded-md gap-[5px] bg-[#272E71] border-[1px] border-[#272E71] text-white">Edit</button>

                </div>

                <div className="w-full border-[1px] border-[#E5E7EB] bg-white rounded h-[750px] max-sm:h-[1100px] rounded-lg  gap-[20px] max-sm:gap-[0px] flex flex-row max-sm:flex-col max-sm:items-center ">
                    <div className="h-full w-[80%] max-sm:w-full max-sm:h-[500px] flex flex-col max-sm:items-center  ">

                        <img src={product.picture} className="w-full h-[400px] max-sm:h-[200px] max-sm:rounded-t-lg rounded-tl-2xl" alt="Product" />


                        <div className="w-full h-[350px] max-sm:h-[304px] p-5 gap-2.5 flex flex-col items-start self-stretch text-[#6B7280]">
                            <h1 className="font-bold text-lg">{product.name} {product.type.name}</h1>
                            <p className="text-[14px] max-sm:text-[10px] font-normal font-['Open_Sans'] ">{product.description}</p>

                        </div>
                    </div>
                    <div className="h-[600px] w-[42%] max-sm:w-full flex flex-col items-start self-stretch p-5  ">

                        <div className="w-full h-[400px] flex flex-col justify-center items-start gap-4 bg-white">
                            <p className="text-xl font-bold not-italic font-[Open-Sans] ">Offer By </p>
                            <img src={product.company.logo} className="w-[250px] h-[36.315px]" alt="Company Logo" />

                            <div className="flex flex-row w-full items-center">

                                <img src={product.user.profilePicture} className="rounded-[50%] w-10 bg-black" alt="User" />

                                <div className="flex flex-col text-base font-[OpenSans]">

                                    <p>{product.user.firstName} {product.user.lastName}</p>
                                    <p>{product.company.name}</p>
                                </div>

                            </div>
                           
                            <div className='flex flex-row justify-center  w-[100%] bg-rede-200'>
                                <img src={Location} className='w-[10%]' alt="innoslocation" />
                                <div className="text-base font-semibold h-[50px] w-full font-[OpenSans]">

                                    <p>{product.company.address?.street},{product.company.address?.house},</p>

                                    <p>{product.company.address?.zipCode} {product.company.address?.city.name}, {product.company.address?.country.name}</p>

                                </div>
                            </div>


                        </div>

                        <Map />

                    </div>



                </div>



                {/* Videoplayer section */}
                <div className="w-full h-[484px] max-sm:h-[304px] border-[1px] border-[#E5E7EB] bg-white rounded  p-5 flex flex-col items-center justify-center gap-[20px]">

                    <div className=" self-stretch flex flex-col justify-center items-start gap-[10px] bg-white">
                        <h1 className="text-xl text-[#374151] font-bold not-italic font-['Open_Sans'] ">Video</h1>

                    </div>
                    <Videoplayer productVideo={product.video} />


                </div>


                {/* Details Section */}
                <div className="w-full h-[230px] border-[1px] border-[#E5E7EB] mb-4   bg-white max-sm:h-[352px] max-sm:items-center max-sm:px-[10px] max-sm:py-[20px] py-[30px] px-[20px] self-stretch flex items-start flex-col   gap-2.5 rounded-lg">

                    <div className="w-full h-full gap-5 flex flex-col items-start self-stretch">
                        <div className="gap-5 w-full h-6 self-stretch flex items-center">
                            <h1 className="text-base font-medium not-italic font-[Open Sans] ">Offer</h1>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center items-start gap-[20px] max-sm:gap-[10px]">
                            <div className=" flex max-sm:flex-col max-sm:gap-3 items-start gap-10 self-stretch">
                                <div className="w-[525px] h-[58px] max-sm:h-[70px] max-sm:w-full  flex items-start gap-[5px] flex-1" >
                                    {/* <img src="" alt="" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_1_1112)">
                                            <path d="M12.725 15.1728C13.3525 15.1728 13.9659 14.9867 14.4877 14.6381C15.0094 14.2895 15.4161 13.7939 15.6562 13.2142C15.8964 12.6344 15.9592 11.9965 15.8368 11.381C15.7144 10.7656 15.4122 10.2002 14.9685 9.7565C14.5247 9.31278 13.9594 9.0106 13.3439 8.88818C12.7285 8.76575 12.0905 8.82858 11.5108 9.06873C10.931 9.30887 10.4355 9.71553 10.0869 10.2373C9.73824 10.7591 9.55215 11.3725 9.55215 12C9.55327 12.8411 9.8879 13.6475 10.4827 14.2423C11.0774 14.8371 11.8838 15.1717 12.725 15.1728ZM12.725 10.3278C13.0558 10.3278 13.3793 10.4259 13.6544 10.6098C13.9295 10.7936 14.1439 11.0549 14.2705 11.3606C14.3971 11.6663 14.4302 12.0027 14.3656 12.3272C14.301 12.6517 14.1416 12.9498 13.9076 13.1837C13.6736 13.4176 13.3755 13.5769 13.0509 13.6413C12.7264 13.7058 12.39 13.6726 12.0844 13.5459C11.7787 13.4192 11.5175 13.2047 11.3338 12.9295C11.15 12.6544 11.052 12.3309 11.0522 12C11.0525 11.5565 11.2289 11.1312 11.5425 10.8176C11.8561 10.5039 12.2814 10.3276 12.725 10.3272V10.3278Z" fill="#9CA3AF" />
                                            <path d="M5.79779 13.9863C5.74666 14.1789 5.77407 14.3839 5.87399 14.5563L7.08539 16.6554C7.13431 16.7408 7.1996 16.8156 7.27752 16.8757C7.35543 16.9358 7.44444 16.9799 7.53944 17.0055C7.73207 17.056 7.93683 17.0286 8.10944 16.9293L9.16994 16.3185C9.6471 16.7102 10.1856 17.0205 10.7637 17.237V18.4616C10.7637 18.6605 10.8427 18.8512 10.9834 18.9919C11.124 19.1325 11.3148 19.2116 11.5137 19.2116H13.9365C14.1354 19.2116 14.3262 19.1325 14.4668 18.9919C14.6075 18.8512 14.6865 18.6605 14.6865 18.4616V17.237C15.2646 17.0205 15.8031 16.7102 16.2802 16.3185L17.3407 16.9293C17.5134 17.0286 17.7181 17.056 17.9107 17.0055C18.0057 16.9799 18.0947 16.9358 18.1727 16.8757C18.2506 16.8156 18.3159 16.7408 18.3648 16.6554L19.5762 14.5563C19.6761 14.3839 19.7035 14.1789 19.6524 13.9863C19.5998 13.7945 19.4741 13.631 19.3023 13.5308L18.2418 12.92C18.3472 12.3112 18.3472 11.6888 18.2418 11.0801L19.3023 10.4693C19.4741 10.369 19.5998 10.2055 19.6524 10.0137C19.7035 9.82111 19.6761 9.6161 19.5762 9.44371L18.3648 7.3446C18.3159 7.25922 18.2506 7.18434 18.1727 7.12426C18.0948 7.06418 18.0057 7.02008 17.9107 6.9945C17.7181 6.94481 17.5136 6.97214 17.3407 7.0707L16.2802 7.6815C15.8031 7.2899 15.2646 6.97964 14.6865 6.7632V5.5386C14.6865 5.33969 14.6075 5.14893 14.4668 5.00827C14.3262 4.86762 14.1354 4.7886 13.9365 4.7886H11.5135C11.3146 4.7886 11.1239 4.86762 10.9832 5.00827C10.8426 5.14893 10.7635 5.33969 10.7635 5.5386V6.7632C10.1854 6.97969 9.64696 7.29 9.16979 7.68165L8.10929 7.07085C7.93643 6.97229 7.73197 6.94496 7.53929 6.99465C7.44428 7.02023 7.35526 7.06433 7.27734 7.12441C7.19942 7.18449 7.13413 7.25937 7.08524 7.34475L5.87399 9.44385C5.77407 9.61625 5.74666 9.82126 5.79779 10.0139C5.85036 10.2057 5.97606 10.3692 6.14789 10.4694L7.20839 11.0802C7.10299 11.689 7.10299 12.3113 7.20839 12.9201L6.14789 13.5309C5.97609 13.631 5.85039 13.7945 5.79779 13.9863ZM8.78159 13.0958C8.57859 12.3794 8.57859 11.6207 8.78159 10.9043C8.82614 10.7442 8.81622 10.5739 8.75338 10.4201C8.69055 10.2663 8.57837 10.1377 8.43449 10.0547L7.54679 9.54345L8.00819 8.74365L8.89499 9.255C9.03863 9.33887 9.20619 9.37231 9.37103 9.35003C9.53586 9.32774 9.68852 9.251 9.80474 9.132C10.3252 8.60115 10.9813 8.22319 11.7016 8.03925C11.8627 7.99767 12.0054 7.90372 12.1072 7.77219C12.209 7.64065 12.2642 7.479 12.2641 7.31265V6.2886H13.1865V7.3125C13.1864 7.47885 13.2416 7.6405 13.3434 7.77204C13.4453 7.90357 13.5879 7.99752 13.749 8.0391C14.4693 8.22304 15.1254 8.601 15.6459 9.13186C15.7621 9.25087 15.9148 9.32763 16.0796 9.34992C16.2444 9.3722 16.412 9.33874 16.5556 9.25485L17.4418 8.74365L17.9032 9.54345L17.0155 10.0547C16.8717 10.1378 16.7596 10.2664 16.6968 10.4201C16.6339 10.5739 16.6239 10.7442 16.6683 10.9043C16.8715 11.6206 16.8715 12.3794 16.6683 13.0958C16.6239 13.2558 16.6339 13.4261 16.6968 13.5799C16.7596 13.7336 16.8717 13.8622 17.0155 13.9454L17.9032 14.4566L17.4418 15.2564L16.5556 14.745C16.412 14.6611 16.2444 14.6277 16.0796 14.6499C15.9148 14.6722 15.7621 14.749 15.6459 14.868C15.1254 15.3989 14.4693 15.7768 13.749 15.9608C13.5879 16.0023 13.4453 16.0963 13.3434 16.2278C13.2416 16.3594 13.1864 16.521 13.1865 16.6874V17.7113H12.2635V16.6875C12.2636 16.5212 12.2084 16.3595 12.1066 16.228C12.0048 16.0964 11.8621 16.0025 11.701 15.9609C10.9807 15.777 10.3246 15.399 9.80414 14.8682C9.68798 14.7493 9.53544 14.6726 9.37073 14.6503C9.20603 14.628 9.03859 14.6613 8.89499 14.745L8.00879 15.2562L7.54739 14.4564L8.43509 13.9452C8.57883 13.862 8.69086 13.7335 8.75358 13.5797C8.8163 13.426 8.82615 13.2557 8.78159 13.0958Z" fill="#9CA3AF" />
                                            <path d="M22.749 6.89206C21.8056 5.04441 20.3705 3.493 18.6018 2.40875C16.8332 1.32449 14.7995 0.749464 12.725 0.747009C12.526 0.747009 12.3353 0.826027 12.1946 0.966679C12.054 1.10733 11.975 1.2981 11.975 1.49701C11.975 1.69592 12.054 1.88669 12.1946 2.02734C12.3353 2.16799 12.526 2.24701 12.725 2.24701C14.9151 2.24722 17.0415 2.98475 18.7614 4.34077C20.4813 5.69679 21.6947 7.59234 22.2059 9.72202C22.7172 11.8517 22.4967 14.0915 21.5798 16.0805C20.6629 18.0696 19.1031 19.692 17.1518 20.6865C15.721 21.4178 14.1312 21.7831 12.5247 21.7496C10.9182 21.7162 9.34509 21.2851 7.94597 20.4949C6.54685 19.7047 5.3654 18.5801 4.50728 17.2216C3.64916 15.863 3.14114 14.313 3.02865 12.7101L4.47075 12.8949L2.73885 8.75491L0.0195007 12.3246L1.5147 12.5162C1.59204 14.1914 2.0434 15.8282 2.83568 17.3063C3.62795 18.7844 4.74104 20.0665 6.09332 21.0584C7.44559 22.0503 9.00275 22.727 10.6506 23.0387C12.2984 23.3505 13.9952 23.2894 15.6163 22.8601C17.2375 22.4307 18.742 21.6439 20.0195 20.5573C21.297 19.4708 22.315 18.112 22.999 16.5808C23.683 15.0495 24.0156 13.3846 23.9723 11.7081C23.929 10.0316 23.5111 8.38599 22.749 6.89206Z" fill="#9CA3AF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_1112">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <div className="flex flex-col items-start gap-[10px] flex-1">

                                        <h1 className="text-base font-normal text-[#6b7280]">
                                            Techonology
                                        </h1>

                                        <div className="flex flex-row w-full h-[24px] items-center gap-[5px]  ">
                                            {product.categories.map((category) => (

                                                <p key={category.id} className="flex h-[24px] text-base items-center gap-[10px] max-sm:text-[11px] bg-[#E5E7EB] rounded-[20px] px-[14px]">
                                                    {category.name}</p>


                                            ))}


                                        </div>
                                    </div>

                                </div>



                                <div className="w-[525px] h-[58px] max-sm:h-[70px] max-sm:w-full bg-white flex items-start gap-[5px] flex-1">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.1837 24H5.39356C5.10982 23.9976 4.83863 23.8828 4.63951 23.6806C4.4404 23.4785 4.32964 23.2056 4.33156 22.9218V20.2983C4.32653 19.5159 4.62629 18.7623 5.16732 18.1972C5.70836 17.632 6.44816 17.2997 7.23001 17.2706C7.31356 14.2589 7.92586 12.2594 9.05236 11.3204C9.45226 10.9922 9.84631 10.6304 10.1685 10.3082C9.84184 10.2388 9.52142 10.1428 9.21046 10.0211C9.09481 9.97846 8.96881 9.93316 8.87356 9.90376C8.81941 9.94771 8.75206 10.0088 8.69776 10.0577C8.39925 10.3686 8.04171 10.6168 7.64606 10.7879C7.25041 10.9589 6.82461 11.0493 6.39361 11.0537C4.52296 11.0537 3.78181 9.15826 3.75361 7.96366C3.73456 7.21651 4.51096 6.52816 6.16336 5.24341C6.53386 4.95346 6.86941 4.69561 7.06711 4.50961C7.23826 4.32952 7.37307 4.11811 7.46416 3.88696C7.57285 3.55223 7.77626 3.25619 8.04976 3.03469C8.32325 2.81319 8.6551 2.67573 9.00511 2.63896C9.10835 2.63469 9.21036 2.61481 9.30766 2.58001H9.30616C9.27541 2.58001 9.30616 2.34571 9.10261 1.55911C9.02017 1.33837 9.00512 1.09813 9.05935 0.868829C9.11359 0.639526 9.23467 0.431483 9.40726 0.271062C10.095 -0.317838 11.1987 0.152412 12.7266 0.798312C13.2627 1.02541 13.815 1.26121 14.31 1.42231C16.623 2.18266 19.2 5.65726 19.2 9.42916C19.1651 11.0284 18.8293 12.6067 18.21 14.0816C17.7918 15.1029 17.511 16.1753 17.3751 17.2706C18.152 17.3071 18.8846 17.6426 19.4197 18.2069C19.9549 18.7712 20.251 19.5206 20.2463 20.2983V22.9218C20.2482 23.2057 20.1373 23.4786 19.9381 23.6808C19.7388 23.883 19.4675 23.9978 19.1837 24ZM5.83156 22.5H18.7457V20.2983C18.7514 19.8991 18.5985 19.5139 18.3206 19.2272C18.0427 18.9405 17.6624 18.7757 17.2632 18.7691H15.8408V18.0191C15.8804 16.4895 16.2053 14.9807 16.7988 13.5704C17.3568 12.2589 17.6625 10.8539 17.7 9.42916C17.709 8.08651 17.3554 6.76633 16.6765 5.60794C15.9976 4.44954 15.0186 3.49589 13.8428 2.84761C13.3125 2.67481 12.7178 2.42431 12.1421 2.17966C11.6921 1.98931 11.0859 1.73296 10.6538 1.59466C10.7601 1.90145 10.8015 2.22701 10.7753 2.55064C10.749 2.87428 10.6558 3.18893 10.5015 3.47461C10.3386 3.6764 10.1333 3.8399 9.90013 3.95356C9.667 4.06723 9.41174 4.12826 9.15241 4.13236C9.01321 4.14556 9.00151 4.14736 8.81986 4.52926C8.65061 4.9319 8.40371 5.29725 8.09326 5.60446C7.87066 5.81251 7.50001 6.10261 7.08541 6.42631C6.42762 6.89818 5.8169 7.4324 5.26171 8.02156C5.29831 8.37016 5.48881 9.55366 6.39406 9.55366C6.64109 9.54803 6.88424 9.49094 7.10796 9.38603C7.33168 9.28111 7.53106 9.13069 7.69336 8.94436C7.84404 8.76456 8.0333 8.62102 8.24707 8.52439C8.46084 8.42776 8.69363 8.38054 8.92816 8.38621C9.202 8.4306 9.46988 8.50609 9.72661 8.61121C10.1589 8.82764 10.6477 8.90443 11.1255 8.83096C11.3343 8.74305 11.568 8.73459 11.7825 8.80719C11.9971 8.87979 12.1776 9.02841 12.2901 9.22501C12.4409 9.51361 12.794 10.1918 10.0094 12.4755C9.20656 13.145 8.73781 15.1005 8.72026 17.8529L8.72461 18.0179V18.7679H7.31551C6.91605 18.7742 6.53543 18.9388 6.25721 19.2255C5.97899 19.5122 5.8259 19.8976 5.83156 20.2971V22.5Z" fill="#9CA3AF" />
                                    </svg>
                                    <div className="flex flex-col items-start gap-[10px] flex-1">
                                        <h1 className="text-base font-normal text-[#6b7280]">
                                            Business Models
                                        </h1>

                                        <div className="flex flex-row justify-center w-full h-[24px] items-center gap-[5px] ">
                                            {product.businessModels.map((model) => (

                                                <p key={model.id} className="flex flex-row h-[24px] px-[5px] text-sm max-sm:text-[11px] max-sm:px-[0px] items-center gap-[10px] bg-[#E5E7EB] rounded-[20px] text-center">
                                                    {model.name}</p>


                                            ))}

                                        </div>


                                    </div>
                                </div>

                            </div>

                            <div className=" flex max-sm:flex-col max-sm:gap-3 items-start gap-10 self-stretch">

                                <div className="w-[525px] h-[58px] max-sm:h-[80px] max-sm:w-full  flex items-start gap-[5px] flex-1">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_1_1135)">
                                            <path d="M16.5835 13.166H11.584C11.3851 13.166 11.1944 13.0869 11.0537 12.9463C10.9131 12.8056 10.834 12.6149 10.834 12.416V3.2505C10.834 3.05159 10.9131 2.86083 11.0537 2.72017C11.1944 2.57952 11.3851 2.5005 11.584 2.5005C11.783 2.5005 11.9737 2.57952 12.1144 2.72017C12.255 2.86083 12.334 3.05159 12.334 3.2505V11.6655H16.5835C16.7825 11.6655 16.9732 11.7445 17.1139 11.8852C17.2545 12.0258 17.3335 12.2166 17.3335 12.4155C17.3335 12.6144 17.2545 12.8052 17.1139 12.9458C16.9732 13.0865 16.7825 13.1655 16.5835 13.1655V13.166Z" fill="#9CA3AF" />
                                            <path d="M12 24C9.33071 24.0058 6.73533 23.1235 4.62272 21.4919C2.5101 19.8604 1.00032 17.5723 0.331211 14.9883C-0.337899 12.4042 -0.128308 9.67096 0.926965 7.21912C1.98224 4.76729 3.82322 2.7362 6.15989 1.44582C8.49657 0.155443 11.1961 -0.320884 13.8333 0.0918751C16.4705 0.504634 18.8954 1.78302 20.7261 3.72565C22.5567 5.66828 23.6891 8.16474 23.9448 10.8218C24.2004 13.4788 23.5649 16.1453 22.1382 18.4014C22.0855 18.4847 22.0169 18.5568 21.9363 18.6136C21.8557 18.6703 21.7648 18.7107 21.6686 18.7323C21.5724 18.754 21.4729 18.7564 21.3758 18.7396C21.2787 18.7228 21.1858 18.687 21.1025 18.6343C21.0192 18.5816 20.9471 18.513 20.8903 18.4324C20.8336 18.3518 20.7932 18.2608 20.7716 18.1647C20.75 18.0685 20.7475 17.969 20.7643 17.8719C20.7811 17.7747 20.8169 17.6819 20.8696 17.5986C22.2547 15.4086 22.7836 12.7848 22.3552 10.2292C21.9268 7.67358 20.5711 5.36569 18.5476 3.7471C16.524 2.12851 13.9747 1.31287 11.3874 1.45627C8.80015 1.59966 6.35658 2.69201 4.52429 4.5243C2.692 6.35659 1.59966 8.80015 1.45626 11.3874C1.31287 13.9747 2.1285 16.524 3.74709 18.5476C5.36568 20.5711 7.67357 21.9268 10.2292 22.3552C12.7847 22.7836 15.4086 22.2547 17.5986 20.8696C17.6819 20.8169 17.7747 20.7811 17.8719 20.7643C17.969 20.7475 18.0685 20.75 18.1647 20.7716C18.2608 20.7932 18.3518 20.8336 18.4324 20.8903C18.513 20.9471 18.5816 21.0192 18.6343 21.1025C18.687 21.1858 18.7228 21.2787 18.7396 21.3758C18.7564 21.4729 18.7539 21.5724 18.7323 21.6686C18.7107 21.7648 18.6703 21.8557 18.6136 21.9363C18.5568 22.0169 18.4847 22.0855 18.4014 22.1382C16.4871 23.3528 14.2671 23.9985 12 24Z" fill="#9CA3AF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_1135">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <div className="flex flex-col items-start gap-[10px] flex-1">

                                        <h1 className="text-base font-normal text-[#6b7280]">
                                            TRL
                                        </h1>
                                        <div className="flex flex-row w-full h-[24px]  items-center gap-[5px] ">

                                            <p key={product.trl.id} className="flex text-sm h-[29px] px-[18px] max-sm:text-[11px] items-center gap-[10px] bg-[#E5E7EB] rounded-[20px]">
                                                {product.trl.name}</p>

                                        </div>

                                    </div>
                                </div>

                                <div className="w-[525px] h-[58px] max-sm:h-[80px] max-sm:w-full flex items-start gap-[5px] flex-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_1_1147)">
                                            <path d="M15.1485 5.6499L16.2735 3.3984C16.3175 3.3103 16.3438 3.21439 16.3508 3.11614C16.3578 3.01789 16.3453 2.91922 16.3142 2.82578C16.283 2.73234 16.2338 2.64595 16.1692 2.57154C16.1047 2.49714 16.0261 2.43617 15.938 2.39213C15.8499 2.34808 15.754 2.32182 15.6558 2.31484C15.5575 2.30786 15.4588 2.3203 15.3654 2.35146C15.272 2.38261 15.1856 2.43186 15.1112 2.4964C15.0368 2.56094 14.9758 2.6395 14.9317 2.7276L13.6999 5.19285H10.3L8.4543 1.5H14.1636C14.3625 1.5 14.5533 1.42098 14.6939 1.28033C14.8346 1.13968 14.9136 0.948912 14.9136 0.75C14.9136 0.551088 14.8346 0.360322 14.6939 0.21967C14.5533 0.0790176 14.3625 0 14.1636 0L7.24065 0C7.11282 2.99082e-05 6.98712 0.0327302 6.87549 0.0949964C6.76385 0.157263 6.66998 0.247028 6.60279 0.355771C6.5356 0.464515 6.49732 0.588626 6.49158 0.716324C6.48584 0.844022 6.51283 0.971067 6.57 1.0854L8.8515 5.65005C7.01718 6.86396 5.49487 8.4932 4.40809 10.4056C3.3213 12.318 2.70065 14.4596 2.5965 16.6567C2.5965 19.6084 5.1 24 12 24C18.9 24 21.4035 19.6084 21.4035 16.6567C21.2993 14.4596 20.6787 12.3179 19.5919 10.4055C18.5051 8.49312 16.9828 6.86385 15.1485 5.6499ZM12 22.5C6.20145 22.5 4.0965 19.005 4.0965 16.6567C4.0965 11.1694 9.0594 6.69285 10.2693 6.69285H13.7307C14.9406 6.69285 19.9035 11.1694 19.9035 16.6567C19.9035 19.005 17.7985 22.5 12 22.5Z" fill="#9CA3AF" />
                                            <path d="M12.75 14.087V11.8753C12.9895 11.9474 13.2134 12.0637 13.41 12.2183C13.4866 12.2803 13.5746 12.3267 13.6691 12.3547C13.7635 12.3827 13.8626 12.3919 13.9606 12.3816C14.0586 12.3714 14.1537 12.3419 14.2403 12.2949C14.3269 12.2479 14.4034 12.1843 14.4655 12.1078C14.5275 12.0312 14.5739 11.9432 14.6019 11.8487C14.63 11.7542 14.6391 11.6552 14.6288 11.5572C14.6186 11.4591 14.5891 11.3641 14.5421 11.2775C14.4951 11.1909 14.4316 11.1143 14.355 11.0523C13.8871 10.6774 13.3319 10.4271 12.7412 10.3248C12.7303 10.1317 12.6447 9.95049 12.5025 9.81942C12.3603 9.68834 12.1727 9.61773 11.9794 9.62253C11.7861 9.62732 11.6023 9.70715 11.4668 9.84511C11.3313 9.98307 11.2548 10.1683 11.2535 10.3617C10.6334 10.4338 10.0576 10.7187 9.62427 11.1679C9.19089 11.6171 8.92679 12.2028 8.877 12.825C8.877 14.2635 9.99825 14.6634 11.0831 15.0516C11.1353 15.07 11.1959 15.0936 11.25 15.1131V17.6082C10.7623 17.5715 10.2922 17.4099 9.885 17.139C9.80613 17.0799 9.71639 17.0369 9.62091 17.0125C9.52543 16.9881 9.42607 16.9827 9.32851 16.9967C9.23096 17.0107 9.13711 17.0438 9.05233 17.094C8.96755 17.1443 8.8935 17.2107 8.8344 17.2896C8.77531 17.3685 8.73233 17.4582 8.70791 17.5537C8.6835 17.6492 8.67813 17.7485 8.69212 17.8461C8.7061 17.9436 8.73917 18.0375 8.78942 18.1223C8.83967 18.2071 8.90613 18.2811 8.985 18.3402C9.65952 18.8017 10.4487 19.0671 11.265 19.1071C11.2821 19.294 11.3696 19.4673 11.5098 19.5921C11.6499 19.7168 11.8322 19.7837 12.0198 19.779C12.2073 19.7744 12.3861 19.6987 12.5199 19.5672C12.6538 19.4357 12.7326 19.2583 12.7406 19.0708C14.9502 18.7708 15.3134 17.5049 15.3134 16.7112C15.315 15.3408 14.085 14.648 12.75 14.087ZM10.377 12.825C10.377 12.4511 10.7453 12.1219 11.25 11.9328V13.515C10.418 13.2015 10.377 13.1001 10.377 12.825ZM12.75 17.5443V15.7368C13.6545 16.1849 13.815 16.4718 13.815 16.7109C13.815 17.1414 13.4435 17.415 12.75 17.5443Z" fill="#9CA3AF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_1147">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <div className="flex flex-col items-start gap-[10px] flex-1">

                                        <h1 className="text-base font-normal text-[#6b7280]">
                                            Costs
                                        </h1>
                                        <div className="flex flex-row w-full h-[24px]  items-center gap-[5px] ">
                                            <p className="flex h-[24px] items-center gap-[5px] rounded-[20px] max-sm:text-[11px] bg-[#E5E7EB] px-[14px] py-[5px]"> {product.investmentEffort}</p>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>





        </div>

    );
};

export default ProductDetails;
