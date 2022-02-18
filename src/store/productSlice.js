import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'products',
    initialState:{
        selectCategory: 'fruit'
    },
    reducers:{
        xyzs:(state,action) => {
            alert(action.payload);
            // cartItems.push(action);
        }
    }
})

export const {xyzs} = slice.actions;
export default slice.reducer;