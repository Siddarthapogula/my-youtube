import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name : "suggestions",
    initialState: {
        searchSuggestions : null,
    },
    reducers : {
        addSearchSuggestions : (state, action) =>{
            state.searchSuggestions = action.payload;
        }
    }
})

export const {addSearchSuggestions} = suggestionSlice.actions;
export default suggestionSlice.reducer;