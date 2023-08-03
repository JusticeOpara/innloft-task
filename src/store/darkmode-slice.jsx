import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name:"darkMode",

    intialState:{
        mode:JSON.parse(localStorage.getItem("darkMode")) || false
    },

    reducers:{
        toggledarkMode(state,action){
            state.mode = !state.mode
            localStorage.setItem("darkMode",JSON.stringify(state.mode))
        }
    }
    
})
export const darkModeActions = darkModeSlice.actions
export default darkModeSlice