import React from "react";
import './App.css'
import Product from "./pages/Product";
import Header from "./components/Header";
import Auth from "./components/Auth"
import { Routes, Route} from "react-router-dom";
import EditProduct from "./pages/EditProduct";
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from "./components/Sidebar";
// import { darkModeActions } from './store/darkmode-slice';



function App() {
  const IsLoggedIn = useSelector(state => state.auth.IsLoggedIn)
  console.log(IsLoggedIn, "--isLoggging")

  // const mode = useSelector((state) => state.darkMode.mode)
  //   console.log(mode, "--darkmodetoggle")

  //   const dispatch = useDispatch()

  //   const handleToggle = () => {
  //       dispatch(darkModeActions.toggledarkMode())
  //   }
  // bg:mode? "black" "white"
  // <button onClick={handleToggle}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
  return (
    <div className=" w-[100%]  ">

      <Header />

      <div className="flex h-[100vh] w-[100vw]  bg-yellow-500 fixed overflow-y-auto">


        <Sidebar />

        <Routes>
        
          {!IsLoggedIn && <Route exact path="/" element={<Auth/>} /> }

          <Route path='/product' element={<Product />} />
          {/* { IsLoggedIn && <Route path="/product" element={<Product/>}/> } */}

          <Route path="/editProduct" element={<EditProduct />} />

        </Routes>

      </div>


    </div>
  );
};

export default App;

