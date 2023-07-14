import React, { useEffect, useState } from "react";
import axios from "axios";


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

            <div className="w-[65%] h-[1364px] left-[300px] top-[55px] absolute gap-5 flex flex-col  bg-blue-500">

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
                <div className="w-full h-[500px] bg-slate-50 rounded-lg p-2 gap-10 flex flex-row">
                    <div className="h-full w-[500px] bg-slate-700 flex flex-col gap-5 ">
                        <div className="">

                        </div>

                        <div className="w-full h-60 bg-emerald-300"></div>
                    </div>

                    <div className="h-full w-[10px] bg-teal-600  ">

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
      <p>Email: {product.user.email}</p>
      <p>Position: {product.user.position}</p>
      <h2>Company:</h2>
      <img src={product.company.logo} alt="Company Logo" />
      <p>Company Name: {product.company.name}</p> */}
{/* <p>Address: {product.company.address.street} {product.company.address.house}, {product.company.address.zipCode} {product.company.address.city.name}, {product.company.address.country.name}</p> */ }