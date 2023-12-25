import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const chatSlice = createSlice ({
    name : "chat",
    initialState :[] ,
    reducers: {
        addLiveChat: (state, action)=>{
            state.splice(30,1);
            state.unshift(action.payload);    
    }
    }
})

export const {addLiveChat} = chatSlice.actions;
export default chatSlice.reducer;