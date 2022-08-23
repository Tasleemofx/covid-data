import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
    'data/getData',
    async ()=>{
        axios.get("https://covidnigeria.herokuapp.com/api")
            .then(response => response.data.data.states)
        // const response = await fetch('https://covidnigeria.herokuapp.com/api');
        // if (response.ok){
        //     const data = await response.data.data.json();
        //     console.log(data)
        //     return { data }
        // }
    }
)

export const adminSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers:{
         addItem: (state, action)=>{
           return [...state, action.payload]
           
        },
        editItem: (state, action)=>{
            const newstate = state.map((data) => {
                return(data.id === action.payload.id?
                    action.payload:
                    data)
            })
            return newstate
                    },
        deleteItem: (state, action)=>{      
            const dataTodelete = action.payload
            const filtered = state.filter((item) => item.id !== dataTodelete.id)
            return [...filtered]
        }

        },
        extraReducers: {
            [getData.fulfilled]: (state,action) =>{
                return state = action.payload.data
            }
        }
})

export const { addItem, editItem, deleteItem } = adminSlice.actions

export default adminSlice.reducer;



