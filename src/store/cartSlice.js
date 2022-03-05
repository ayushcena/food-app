import { createSlice } from '@reduxjs/toolkit';
const find = require('array-find');
export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            let bool = false;
            const pseudoId = (new Date()).getTime();
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].productId === action.payload.product.id) {
                    state.cartItems[i].quantity += 1;
                    state.cartItems[i].totalPrice += action.payload.product.price;
                    bool = true;
                }
            }
            if (!bool) {
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
        RemoveItemToCart: (state, action) => {
            let truth = 0;
            let si = 0;
            if(action.payload.topping){
                for (let i = 0; i < state.cartItems.length; i++) {
                    if (state.cartItems[i].productId === action.payload.productId) {
                        si = i;
                        if(state.cartItems[i].topping.length === action.payload.topping.length){
                            for (let j = 0; j < state.cartItems[i].topping.length; j++){
                                if(state.cartItems[i].topping[j] === action.payload.topping[j]){
                                    truth++;
                                }
                            }
                            if(truth === state.cartItems[i].topping.length && truth === action.payload.topping.length){
                                state.cartItems[si].quantity -= 1;
                                state.cartItems[si].totalPrice -= action.payload.price;                                   
                            }
                        }
                    }
                }
            }
            else{
                for (let i = 0; i < state.cartItems.length; i++) {
                    if (state.cartItems[i].productId === action.payload.productId) {
                        state.cartItems[i].quantity -= 1;
                        state.cartItems[i].totalPrice -= action.payload.price;
                        break;
                    }
                }
            }
        }, addItemToCartSpecified: (state, action) => {
            let truth = 0;
            let si = 0;
            if(action.payload.topping){
                for (let i = 0; i < state.cartItems.length; i++) {
                    if (state.cartItems[i].productId === action.payload.productId) {
                        si = i;
                        if(state.cartItems[i].topping.length === action.payload.topping.length){
                            for (let j = 0; j < state.cartItems[i].topping.length; j++){
                                if(state.cartItems[i].topping[j] === action.payload.topping[j]){
                                    truth++;
                                }
                            }
                            if(truth === state.cartItems[i].topping.length && truth === action.payload.topping.length){
                                state.cartItems[si].quantity += 1;
                                state.cartItems[si].totalPrice += action.payload.price;                                   
                            }
                        }
                    }
                }
            }
            else{
                for (let i = 0; i < state.cartItems.length; i++) {
                    if (state.cartItems[i].productId === action.payload.productId) {
                        state.cartItems[i].quantity += 1;
                        state.cartItems[i].totalPrice += action.payload.price;
                        break;
                    }
                }
            }
        }, pizzaSize: (state, action) => {
            let priceofAddons = 0;
            for (let i = 0; i < action.payload.addons.length; i++) {
                priceofAddons += action.payload.addons[i].price;
            }
            if (action.payload.sizePizza.size !== undefined && action.payload.sizePizza.name && action.payload.sizePizza.size !== null) {
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
                    productId: action.payload.sizePizza.productId,
                    size: action.payload.sizePizza.size,
                    price: priceOfPizza,
                    name: action.payload.sizePizza.name,
                    quantity: quantity,
                    topping: xyz,
                    totalPrice: priceOfPizza * action.payload.sizePizza.quantity
                });
            }
            var mo = false;
            var index = 0;
            for (let j = 0; j < state.cartItems.length; j++) {
                for (var i = 0; i < action.payload.addons.length; i++) {
                    if (action.payload.addons[i].drink === state.cartItems[j].name) {
                        mo = true;
                        index = j;
                        break;
                    }
                }
            }
            if (!mo) {
                for (let i = 0; i < action.payload.addons.length; i++) {
                    state.cartItems.push({
                        name: action.payload.addons[i].drink,
                        price: action.payload.addons[i].price,
                        quantity: action.payload.addons[i].quantity,
                        totalPrice: action.payload.addons[i].price * action.payload.addons[i].quantity,
                        productId: action.payload.addons[i].productId
                    })
                }
            } else {
                state.cartItems[index].totalPrice += state.cartItems[index].price;
                state.cartItems[index].quantity += 1;
            }
        }
    }
})

export const getCartItems = (state) => state.cart.cartItems;

export const { addItemToCart, addItemToCartSpecified, pizzaSize, topping, addons, RemoveItemToCart } = slice.actions;
export default slice.reducer;