import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name:'FetchStatus',
    initialState:{
        fetchStatus:false
    },
    reducers:{
        getFetchStatus:(state,_)=>{
             state.fetchStatus
        },
        setFetchStatusDone:(state,_)=>{
            state.fetchStatus=!state.fetchStatus
        }
    }
})

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;