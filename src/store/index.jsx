import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
// import darkModeSlice from "./darkmode-slice";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        // darkMode: darkModeSlice.reducer
    },
  

})
export default store