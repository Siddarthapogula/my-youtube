import { configureStore } from "@reduxjs/toolkit";
import Menu from "./sideSlice"
import movie from "./movieSlice"
import suggestions from "./suggestionSlice"
import cachee from "./searchCache"
const Store = configureStore({
    reducer:{
        app : Menu,
        watch: movie,
        search: suggestions,
        cache : cachee,
    }
})

export default Store;