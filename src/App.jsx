import React from "react";
import './App.css'
import Products from "./pages/Product";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import MainPage from "./components/MainPage";

function App() {
  const isLoggedIn = useSelector(state => state.auth.IsLoggedIn)
  console.log(isLoggedIn, "--isLoggging")
  return (
    <div className="bg-gray-200 h-[2549px] w-[100%] ">
      <Header />
      {!isLoggedIn && <MainPage/>} 
      {isLoggedIn && <Products/>}
      {/* <Products /> */}


      {/* {configuration.hasUserSection && <UserInfoSection />} */}
    </div>
  );
};

export default App;

