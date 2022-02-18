import {createSlice} from '@reduxjs/toolkit';
const find = require('array-find');
export const slice = createSlice({
    name: 'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItemToCart:(state,action) => {
            console.log(action.payload);
            let bool = false;
            const pseudoId = (new Date()).getTime();
            for (let i = 0; i < state.cartItems.length; i++) {
                if(state.cartItems[i].productId === action.payload.product.id) {
                    state.cartItems[i].quantity += 1;
                    state.cartItems[i].totalPrice += action.payload.product.price;
                    bool = true;
                }
            }
            if(!bool) {
                state.cartItems.push({
                    id: pseudoId,
                    productId: action.payload.product.id,
                    name: action.payload.product.name,
                    quantity: action.payload.quantity,
                    price: action.payload.product.price,
                    totalPrice: action.payload.quantity * action.payload.product.price
                });
            }
        },
        RemoveItemToCart:(state, action) => {
            console.log(action.payload);
            for (let i = 0; i < state.cartItems.length; i++) {
                if(state.cartItems[i].productId === action.payload.productId) {
                    state.cartItems[i].quantity -= 1;
                    state.cartItems[i].totalPrice -= action.payload.price;
                    console.log(state.cartItems[i].totalPrice);
                    break;
                }
            }
        },addItemToCartSpecified:(state, action) => {
            console.log(action.payload);
            for (let i = 0; i < state.cartItems.length;i++) {
                if(state.cartItems[i].productId === action.payload.productId){
                    state.cartItems[i].quantity += 1;
                    state.cartItems[i].totalPrice += action.payload.price;
                    break;
                }
            }
        },pizzaSize:(state, action) => {
            console.log(action.payload);
            let priceofAddons = 0;
            for (let i = 0; i < action.payload.addons.length; i++) {
                priceofAddons += action.payload.addons[i].price;              
            }
            let priceOfPizza = 0;
            let xyz = []; 
            for (let i = 0; i < action.payload.toppingsArr.length; i++) {
                priceOfPizza += action.payload.toppingsArr[i].price;
                xyz.push(action.payload.toppingsArr[i].topping);
            }
            priceOfPizza += action.payload.sizePizza.price;
            priceOfPizza = parseInt(priceOfPizza);
            let quantity = parseInt(action.payload.sizePizza.quantity)
            state.cartItems.push({
                size:action.payload.sizePizza.size,
                price:priceOfPizza,
                name:action.payload.sizePizza.name,
                quantity:quantity,
                topping:xyz,
                totalPrice:priceOfPizza*action.payload.sizePizza.quantity
            });

            for (var i = 0; i < action.payload.addons.length; i++) {
                state.cartItems.push({
                    name:action.payload.addons[i].drink,
                    price:action.payload.addons[i].price,
                    quantity:action.payload.addons[i].quantity,
                    totalPrice:action.payload.addons[i].price*action.payload.addons[i].quantity,
                    productId: action.payload.addons[i].productId
                })
            }

            // state.cartItems[state.cartItems.length - 1].totalPrice += action.payload.price;
        },topping:(state, action) => {
            console.log(action.payload);
        },addons:(state, action) => {
            console.log(action.payload);
        }
    }
})

export const getCartItems = (state) => state.cart.cartItems;

export const {addItemToCart,addItemToCartSpecified,pizzaSize,topping,addons,RemoveItemToCart} = slice.actions;
export default slice.reducer;