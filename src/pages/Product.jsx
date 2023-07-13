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

            <div className="w-[60%] h-[1364px] left-[304px] top-[55px] absolute bg-blue-500">
                <div className="w-full h-[500px] bg-white rounded-[6px]">

                </div>
                
            </div>

        </>

    );
};

export default ProductDetails;
{/* <h1>{product.name}</h1> */}
                {/* <img src={product.picture} alt="Product" /> */}
                {/* <p>{product.description}</p> */}
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
                {/* <p>Address: {product.company.address.street} {product.company.address.house}, {product.company.address.zipCode} {product.company.address.city.name}, {product.company.address.country.name}</p> */}