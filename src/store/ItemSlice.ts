import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces/Product";

export interface ItemState {
  items:Product[],
  page:number,
  pageSize:number
}

const initialState:ItemState={
  items: [],
  page: 1,
  pageSize: 4
}

const itemSlice = createSlice({
    name:"items",
    initialState,
    reducers:{
        addItems:(state,action)=>{
          state.items.push(...action.payload)
        },
        addItemsByPagination:(state,action)=>{
             state.items.push(action.payload)
        },
        filterItems:(state,action)=>{
            if (action.payload === "highToLow") {
                state.items.sort(
                  (itemA, itemB) => itemB.price - itemA.price
                );
              }
              else if (action.payload === "lowToHigh") {
                state.items.sort(
                  (itemA, itemB) => itemA.price - itemB.price
                );
              } else {
                state.items.sort(
                  (itemA, itemB) => itemB.rating - itemA.rating
                );
              }
        },
        incrementPage:(state)=>{
          state.page++;
        }
        
    }
});

export const itemAction = itemSlice.actions;
export default itemSlice;