import React from "react";
import getAppConfiguration from "./config";
import './App.css'
import HeaderLogo from "./assets/Header-Menu-Left.png"
import Products from "./pages/Product";

function App() {
  
  const configuration = getAppConfiguration();
  console.log(configuration, "-getAppConfigration")
  // Apply the configuration to your components
  const headerStyle = {
    backgroundColor: configuration.mainColor,
    height: configuration.height,
    width: configuration.width,
    display: configuration.display,
  };




  return (
    <div className="bg-gray-200 h-[2549px] w-[100%] ">
      <header style={headerStyle} >
        <img src={configuration.logo} style={{
          width: "140px",
          position: "absolute",
          height: "26.285715103149414px",
          top: "14px",
          left: '100px',
          padding: '0.5142857432365417px 0.399993896484375px 0.4000018239021301px 0px',
          background: "white",
        }} alt="Logo" />

        <input type="text" placeholder="Enter interests, keyword,company name, etc"
          style={{ position: "absolute", background: "white", width: "500px", height: "27px", top: "14px", left: "320px", borderRadius: "4px" }} />

        
        <img src={HeaderLogo} style={{
          position: "absolute",
          width: "184px",
          height: "25px",
          top: "15px",
          left: "1006px"
          
        }}/>
      </header>
    <Products/>
      {/* Other components */}

      {/* {configuration.hasUserSection && <UserInfoSection />} */}
    </div>
  );
};

export default App;

