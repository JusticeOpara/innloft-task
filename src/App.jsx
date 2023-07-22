import React from "react";
import './App.css'
// import Products from "./pages/Product";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import MainPage from "./components/MainPage";
import { Routes, Route, } from "react-router-dom";
import EditProduct from "./pages/EditProduct";



function App() {
  const IsLoggedIn = useSelector(state => state.auth.IsLoggedIn)
  console.log(IsLoggedIn, "--isLoggging")
  return (
    <div className="bg-gray-200 w-[100%]   ">
      <Header />
      {/* {!isLoggedIn && <MainPage />} */}
      {/* {isLoggedIn && <Products/>} */}
    
      <Routes>
        {/* <Route path="" element={!IsLoggedIn && <MainPage/>}/>
        <Route path='/product' element={IsLoggedIn && <Products />} /> */}
         {!IsLoggedIn && <Route path='*' element={<MainPage />} />}
        {IsLoggedIn && <Route path='/product' element={<EditProduct />} />}
      </Routes>

     
    </div>
  );
};

export default App;

