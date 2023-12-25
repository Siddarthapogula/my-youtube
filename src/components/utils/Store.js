import { configureStore } from "@reduxjs/toolkit";
import Menu from "./sideSlice"
import movie from "./movieSlice"
import suggestions from "./suggestionSlice"
import cachee from "./searchCache"
import chat from "./chatSlice"

const Store = configureStore({
    reducer:{
        app : Menu,
        watch: movie,
        search: suggestions,
        cache : cachee,
        chat : chat,
    }
})

export default Store;