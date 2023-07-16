import React, { useEffect, useState } from "react";
import axios from "axios";
import Videoplayer from "./VideoPlayer";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);

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

    console.log(product, "--ProductData")

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <>

            <div className="w-[76%] h-[1364px] left-[323px] top-[55px] absolute gap-5 flex flex-col  bg-blue-500">

                <div className="w-full h-[30px] bg-gray-500 rounded-[6px]   ">
                    <div className="flex items-center text-center">
                        <span>
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

                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#9CA3AF" />
                            </svg>


                        </span>
                    </div>


                </div>

                <div className="w-full h-[600px]  bg-slate-50 rounded-lg  gap-[20px] flex flex-row">
                    <div className="h-full w-[80%] bg-slate-700 flex flex-col gap-2.5 ">

                        <img src={product.picture} className="w-full h-[350px] bg-blue-200" alt="Product" />


                        <div className="w-full h-[250px] bg-emerald-300 p-5 gap-2.5 flex flex-col items-start self-stretch;">
                            <h1 className="font-bold text-base">Intelligent Finite elements in Structural mechanics</h1>
                            <p className="text-xs font-medium">{product.description}</p>

                        </div>
                    </div>

                    <div className="h-full w-[42%] bg-teal-600 flex flex-col items-start self-stretch p-5  border-l-[RED]">

                        <div className="w-full h-[450px] flex flex-col justify-center items-start gap-2.5 bg-white">
                            <p className="text-base font-semibold not-italic font-[Open Sans] ">Offer By </p>
                            <img src={product.company.logo} className="w-[200px] h-[36.315px]" alt="Company Logo" />

                            <div className="bg-green-400 flex flex-row w-full items-center">

                                <img src={product.user.profilePicture} className="rounded-[50%] w-10 bg-black" alt="User" />

                                <div className="flex flex-col">

                                    <p>{product.user.firstName} {product.user.lastName}</p>
                                    <p>{product.company.name}</p>
                                </div>

                            </div>
                            <div className="text-sm h-[40px] w-full bg-orange-400">
                                <p>{product.company.address.street},{product.company.address.house},</p>
                                <p>{product.company.address.zipCode} {product.company.address.city.name}, {product.company.address.country.name}</p>
                            </div>


                        </div>

                        <div className="w-full h-full bg-indigo-600 self-stretch">

                        </div>
                    </div>

                </div>
                {/* Videoplayer section */}
                <div className="w-full h-[484px] bg-gray-500 rounded  p-5 flex flex-col items-center justify-center gap-[20px]">

                    <div className=" self-stretch flex flex-col justify-center items-start gap-[10px] bg-white">
                        <h1 className="text-base font-medium not-italic font-[Open Sans] ">Video</h1>

                    </div>
                    <Videoplayer />
                </div>


                {/* Details Section */}
                <div className="w-full h-[230px] bg-yellow-200 self-stretch flex items-start flex-col py-[30px] px-[20px] gap-2.5">

                    <div className="w-full h-full bg-white gap-5 flex flex-col items-start self-stretch">
                        <div className="gap-5 w-full h-6 bg-red-200 self-stretch flex items-center">
                        <h1 className="text-base font-medium not-italic font-[Open Sans] ">Offer</h1>
                        </div>
                       


                        <div className="w-full h-full flex flex-col justify-center items-start gap-[20px] bg-lime-400">
                            <div className=" flex items-start gap-10 self-stretch">
                                <div className="w-[525px] h-[58px]  bg-black" >
                                    fhgfhg
                                </div>

                                <div className="w-[525px] h-[58px] bg-white">
                                    gfhgfhf
                                </div>

                            </div>
                            <div className=" flex items-start gap-10 self-stretch">
                 
                                <div className="w-[525px] h-[58px] bg-green-200">
                                    hgfhf
                                </div>
                                <div className="w-[525px] h-[58px] bg-slate-600">

                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>





        </>

    );
};

export default ProductDetails;
{/* <h1>{product.name}</h1> */ }
{/* <img src={product.picture} alt="Product" /> */ }
{/* <p>{product.description}</p> */ }
{/* <p>Type: {product.type.name}</p>
                <p>Categories:</p>
                <ul>
                    {product.categories.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul> */}
{/* <p>Investment Effort: {product.investmentEffort}</p>
      <p>TRL: {product.trl.name}</p>
      <p>Video: <a href={product.video}>{product.video}</a></p>
      <h2>User Info:</h2>
      <img src={product.user.profilePicture} alt="User" />
      <p>Name: {product.user.firstName} {product.user.lastName}</p>
      <p>Email: </p>
      <p>Position: {product.user.position}</p>
      <h2>Company:</h2>
      <img src={product.company.logo} alt="Company Logo" />
      <p>Company Name: </p> */}
{/* <p>Address: {product.company.address.street}  
{product.company.address.zipCode} {product.company.address.city.name}, {product.company.address.country.name}</p> */ }