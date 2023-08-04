import React, { useState, useEffect } from 'react'
import Location from "../assets/inno_location.svg";
import axios from "axios"
import TextEditor from './TextEditor';
import CardLabel from "../assets/CardLabel.svg"
import { Link } from 'react-router-dom';

function EditProduct() {

  const [items, setItems] = useState({
    description: '',
    categories: '',
    businessModels: '',
    trl: '',
    attributes: [],
    company: "",
    user: "",
    address: {},
    street: {},
  });

  // Function to handle attribute changes
  const handleAttributeChange = (index, newValue) => {
    const updatedAttributes = [...items.attributes];

    updatedAttributes[index] = newValue;
    setItems({ ...items, attributes: updatedAttributes });
  };

  const saveProduct = async () => {
    try {

      const data = await axios.put(`https://api-test.innoloft.com/product/${items}/`, items);
      console.log(data, "--Data product Data product")
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
      <div className="w-[78%] max-lg:w-[100%] max-sm:h-[1240px] h-[1160px] bg-slate-950  px-2  max-sm:items-center">

        <div className="wr-[100%] max-lg:w-[100%] top-[55px]  gap-5 flex flex-col bg-white">

          <div className="w-full h-[30px] bg-white  gap-5  mt-4 flex flex-row justify-between items-center">

            <input
              type="text"
              onChange={(e) => setItems({ ...items, trl: e.target.value })}
              className="h-[24px] gap-2 w-full rounded focus:outline-none border-[#D1D5DB] border-[1px] pl-1 placeholder-black"
              placeholder='Offers Title' />

            <Link to="/product" >
              <button className="flex flex-row text-sm font-medium justify-center h-[30px] w-20 py-[5px]  items-center rounded-md gap-[5px] bg-[#272E71] border-[1px] border-[#272E71] text-white ">View Offer</button>
            </Link>


          </div>

          <div className="w-full h-[750px] max-sm:h-[830px] rounded-lg  gap-[20px] max-sm:gap-[0px] flex flex-row max-sm:flex-col max-sm:items-center border-[1px] ">
            <div className="h-full max-sm:w-full max-sm:h-[530px] flex flex-col max-sm:items-center w-[75%] ">
              <div className='w-full h-[400px] max-sm:h-[200px] '>
                <img src={items.picture} className="max-w-[100%] max-sm:rounded-t-lg h-auto bg-blue-200 rounded-tl-2xl" alt="Product" />

              </div>
              <img src={CardLabel} className="w-32 absolute flex pr-0 max-sm:left-[10px] gap-2" alt="cardlabel" />

              <div className="w-full h-[350px] max-sm:h-[464px] bg-white p-5 gap-2.5 flex flex-col items-start self-stretch  text-[#6B7280]">

                <TextEditor />

                <div className="w-full cursor-pointer  z-20 flex justify-end gap-[10px] h-[50px] items-center self-stretch py-0 px-[20px]">

                  <button className="flex items-center h-[30px] rounded-[6px] bg-white px-1 py-[7px] gap-1 ">Cancel</button>
                  <button onClick={saveProduct} className='flex cursor-pointer text-white h-[30px] items-center gap-1 bg-[#272E71] rounded-[6px] px-[20px] py-0'>Save</button>

                </div>

              </div>

            </div>

            <div className="h-[600px] w-[42%] max-sm:h-[300px]  max-sm:w-full flex flex-col items-start self-stretch p-5">

              <div className="w-full h-[400px] bg-white flex flex-col justify-start items-start gap-3 ">

                <p className="text-lg font-semibold not-italic font-[OpenSans] text-[#374151] ">Offered By </p>

                <img src={items.company.logo} className="w-[200px] h-[36.315px]" alt="Company Logo" />

                <div className=" flex flex-row w-full items-center">

                  <img src={items.user.profilePicture} className="rounded-[50%] w-20 bg-black" alt="User" />

                  <div className="flex flex-col text-base font-[OpenSans]">

                    <p>{items.user.firstName} {items.user.lastName}</p>
                    <p>{items.company.name}</p>
                  </div>

                </div>

                <div className='flex flex-row justify-center w-[100%]'>
                  <img src={Location} className='w-[10%]' alt="innoslocation" />
                  <div className="text-base h-[50px] w-full font-[OpenSans]">

                    <p>{items.company.address?.street},{items.company.address?.house},</p>

                    <p>{items.company.address?.zipCode} {items.company.address?.city.name}, {items.company.address?.country.name}</p>

                  </div>
                </div>


              </div>

            </div>

          </div>



          {/* Videoplayer section */}
          <div className="w-full h-[122px]  rounded-[6px] border-[1px] border-[#E5E7EB] px-[20px] py-[20px] flex flex-col items-start gap-[10px]">

            <div className=" self-stretch flex flex-col justify-center items-start gap-[20px] ">
              <h1 className="text-lg font-medium not-italic font-[OpenSans] ">Video</h1>

              <input
                className="w-full flex h-[38px]  pl-2 gap-[4px] self-stretch items-center rounded-[6px] border-[1px] focus:outline-none placeholder-black border-[#D1D5DB]"
                placeholder='Add a youtube or vimeo link'
                onChange={(e) => setItems({ ...items, video: e.target.value })}
                type="text"
              />
            </div>


          </div>


          {/* Details Section */}
          <div className='h-[108px] w-full flex flex-col py-[20px] px-[0px] items-start gap-3 self-stretch  rounded-[6px] border-[1px] border-[#E5E7EB] mb-4  '>
            <div className="flex flex-col items-start gap-20px self-stretch px-[20px] ">
              <h1 className="text-base font-medium not-italic font-[OpenSans] ">Offer details</h1>

              <input
                type='text'
                onChange={(e) => setItems({ ...items, trl: e.target.value })}
                className=" w-full flex h-[36px]  pl-2 gap-[4px] self-stretch items-center rounded-[6px] border-[1px] focus:outline-none placeholder-black border-[#D1D5DB]" placeholder='This is up to you' />
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default EditProduct

