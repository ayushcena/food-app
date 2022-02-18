import {createSlice} from '@reduxjs/toolkit';
const find = require('array-find');
export const slice = createSlice({
    name: 'pizza',
    initialState:{
        cartItems:[]
    },
    reducers:{
        pizza:(state,action) => {
            console.log(action.payload);
            // let bool = false;
            // const pseudoId = (new Date()).getTime();
            // for (let i = 0; i < state.cartItems.length; i++) {
            //     if(state.cartItems[i].Tid === action.payload.Tid) {
            //         state.cartItems[i].quantity += 1;
            //         state.cartItems[i].totalPrice += action.payload.product.price;
            //         bool = true;
            //     }
            // }
            // if(!bool) {
            //     state.cartItems.push({
            //         id: pseudoId,
            //         Tid: action.payload.Tid,
            //         name: action.payload.name,
            //         quantity: action.payload.quantity,
            //         price: action.payload.price,
            //         totalPrice: action.payload.quantity * action.payload.product.price
            //     });
            // }
        }
    }
})

export const getModifications = (state) => state.cart.cartItems;

export const {pizza} = slice.actions;
export default slice.reducer;