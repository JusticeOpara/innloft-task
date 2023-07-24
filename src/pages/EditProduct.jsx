import React, { useState, useEffect } from 'react'

import editIcon from "../assets/bildschirmfoto.png";
import axios from "axios"
import TextEditor from './TextEditor';

function EditProduct() {

  const [items, setItems] = useState({
    description: '',
    categories: '',
    businessModels: '',
    trl: '',
    attributes: [],
  });

  // Function to handle attribute changes
  const handleAttributeChange = (index, newValue) => {
    const updatedAttributes = [...items.attributes];

    updatedAttributes[index] = newValue;
    setItems({ ...items, attributes: updatedAttributes });
  };

  const saveProduct = async () => {
    try {

      await axios.put(`https://api-test.innoloft.com/product/${items}/`, items);

    } catch (error) {
      console.error("Error updating product data:", error);

    }
  };

  useEffect(() => {
    const PushProductData = async () => {
      try {
        const response = await axios.get("https://api-test.innoloft.com/product/6781/");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    PushProductData();
  }, []);
  console.log(items, "--PRODUCT-DATA-ITEMS")


  return (

    <>
      <div className="flex justify-center w-full">

        <div className="w-[80%] hr-[989px] top-[55px] gap-5 flex flex-col  bg-blue-500">

          <div className="w-full h-[30px] bg-white  gap-5  mt-4 flex flex-row justify-between items-center">

            <input
              type="text"
              // value={items.type}
              onChange={(e) => setItems({ ...items, categories: e.target.value })}
              className="h-[24px] gap-2 w-full bg-red-200 rounded focus:outline-none border-[#D1D5DB] border-[1px] pl-1 placeholder-black"
              placeholder='Offers Title' />


            <button className="flex  text-xs justify-end h-[30px] w-26 py-[5px] px-[10px] items-center rounded-md gap-[5px] bg-[#272E71] border-[1px] border-[#272E71] text-white ">View Offer</button>


          </div>

          <div className="w-full h-[750px]  bg-slate-500 rounded-lg  gap-[20px] flex flex-row">
            <div className="h-full w-[75%] bg-red-700 flex flex-col  ">
              <div className='w-full h-[400px]'>
                <img src={items.picture} className="max-w-[100%] h-auto bg-blue-200 rounded-tl-2xl" alt="Product" />

              </div>

              <div className="w-full h-[350px]  bg-white p-5 gap-2.5 flex flex-col items-start self-stretch  text-[#6B7280]">

                <TextEditor />

                <div className="w-full cursor-pointer flex justify-end gap-[10px] h-[50px] items-center self-stretch py-0 px-[20px]">

                  <button className="flex items-center h-[30px] rounded-[6px] bg-white px-1 py-[7px] gap-1 ">Cancel</button>
                  <button onClick={saveProduct} className='flex cursor-pointer text-white h-[30px] items-center gap-1 bg-[#272E71] rounded-[6px] px-[20px] py-0'>Save</button>

                </div>
              </div>


            </div>

            <div className="h-[600px] w-[42%] bg-teal-600 flex flex-col items-start self-stretch p-5  border-l-[RED]">

              <div className="w-full h-[450px] flex flex-col justify-center items-start gap-2.5 bg-white">

                <p className="text-base font-semibold not-italic font-[OpenSans] ">Offer By </p>

                <img src="" className="w-[200px] h-[36.315px]" alt="Company Logo" />


                <div className="bg-green-600 flex flex-row w-full items-center">

                  <img src={""} className="rounded-[50%] w-10 bg-black" alt="User" />

                  <div className="flex flex-col bg-slate-500">

                    <p>{""} {""}</p>
                    <p>{""}</p>
                  </div>

                </div>

                <div className="text-sm h-[40px] w-full bg-orange-400">
                  <p></p>
                  <p></p>
                </div>

              </div>



            </div>



          </div>



          {/* Videoplayer section */}
          <div
            className="w-full h-[122px] bg-gray-200 rounded-[6px] border-[1px] border-[#E5E7EB] px-[20px] py-[20px] flex flex-col items-start gap-[10px]">

            <div className=" self-stretch flex flex-col justify-center items-start gap-[20px] bg-red-300">
              <h1 className="text-base font-medium not-italic font-[OpenSans] ">Video</h1>
              {/* className="font-bold text-lg w-full rounded-md pl-2 border-[1px] focus:outline-none border-[#D1D5DB]" */}
              <input
                className="w-full flex h-[38px]  pl-2 gap-[4px] self-stretch items-center rounded-[6px] border-[1px] focus:outline-none border-[#D1D5DB]"
                placeholder='Add a youtube or vimeo link'
              />
            </div>


          </div>


          {/* Details Section */}
          <div className='h-[108px] w-full flex flex-col py-[20px] px-[0px] items-start gap-3 self-stretch  bg-emerald-200 '>
            <div className="flex flex-col items-start gap-20px self-stretch px-[20px] bg-slate-50">
              <h1 className="text-base font-medium not-italic font-[OpenSans] ">Offer details</h1>

              <input
                onChange={(e) => setItems({ ...items, trl: e.target.value })}
                className="w-full flex h-[36px]  pl-2 gap-[4px] self-stretch items-center rounded-[6px] border-[1px] focus:outline-none border-[#D1D5DB]" placeholder='This is up to you' />
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default EditProduct