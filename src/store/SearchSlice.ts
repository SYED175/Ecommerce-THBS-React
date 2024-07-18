import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces/Product";


interface SearchState {
    results: Product[];
    isActive: boolean;
  }
const initialState:SearchState = {
    results: [],
    isActive: false,
  };
  //always create an object for initialState
const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setSearchResults:(state,action)=>{
           state.results = action.payload
        },
        setIsActive:(state,action)=>{
            state.isActive = action.payload
        }
    }
})

export const searchAction = searchSlice.actions;
export default searchSlice;
