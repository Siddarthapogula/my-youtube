import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const searchCache= createSlice({
    name:"cache",
    initialState : {

    },
    reducers: {
        addCache: (state, action)=>{
            state = Object.assign(state, action.payload)
        }
    }
})

export const {addCache} = searchCache.actions;
export default searchCache.reducer;