import {createSlice} from '@reduxjs/toolkit'
const initialState={
    token:''
}

export const auth= createSlice({
    name:'auth',
    initialState,
    reducers:{
        getToken:(state, action)=>{
           state.token=action.payload
        }
    }
})

export const {getToken}=auth.actions

export default auth.reducer