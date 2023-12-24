import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const MovieSlice = createSlice({
    name: "movie",
    initialState:{
        movies : null,
        commentChannels: null,
    },
    reducers:{
        addMovies: (state, action)=>{
            state.movies = action.payload;
        },
        addCommentChannelName : (state, action)=>{
            state.commentChannels = action.payload;
        }
    }
})

export const {addMovies, addCommentChannelName} = MovieSlice.actions;
export default MovieSlice.reducer;