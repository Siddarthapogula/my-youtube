import { createSlice } from "@reduxjs/toolkit";

const sideSlice = createSlice({
    name: "Menu",
    initialState :{
        isOpenMenu: true
    },
    reducers: {
        ToggleOpenMenu : (state)=>{
            state.isOpenMenu = ! state.isOpenMenu;
        },
        CloseSideBar : (state)=>{
            state.isOpenMenu = false;
        }
    },
})
export const {ToggleOpenMenu, CloseSideBar} = sideSlice.actions;
export default sideSlice.reducer;