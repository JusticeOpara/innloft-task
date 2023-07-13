
export default function ProductEdit (){

    return(
        <div>

        </div>
    )
}

import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    //   const [product, setProduct] = useState(null);
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const url = "https://api-test.innoloft.com/product/6781"
    console.log(url, "---data")


    const fetchedData = async () => {

        setIsLoading(true)

        try {

            const result = await axios.get(url);
            console.log(result, "--innerData")
            const cartList = [...innerData?.results];
            console.log(cartList, "MOVELIST")

            setResponse(result.data);

            console.log(result.data, "products")


        } catch (error) {
            console.log(error, "--NETWORK ISSUES")

        } finally {
            setIsLoading(false)
        }

    };


    useEffect(() => {

        fetchedData()

    }, []);

    console.log(response, "--DATA")





    return (
        <>
            {isLoading ? <p>loading</p> :

                <div>

                    <p>ljkjsdkgjklsdjgkjsdjgksj</p>
                </div>


            }


        </>



    );