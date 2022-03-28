import { createSlice } from '@reduxjs/toolkit';
const find = require('array-find');
export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            console.log(action.payload);
            let bool = false;
            const pseudoId = (new Date()).getTime();
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].productId === action.payload.product.id) {
                    state.cartItems[i].quantity += 1;
                    state.cartItems[i].totalPrice += action.payload.product.cost;
                    bool = true;
                }
            }
            if (!bool) {
                state.cartItems.push({
                    id: pseudoId,
                    productId: action.payload.product.id,
                    name: action.payload.product.item_data.name,
                    quantity: 1,
                    price: action.payload.product.cost,
                    totalPrice: 1 * action.payload.product.cost
                });
            }
        },
        RemoveItemToCart: (state, action) => {
            let truth = 0;
            let si = 0;
            if (action.payload.topping) {
                for (let i = 0; i < state.cartItems.length; i++) {
                    if (state.cartItems[i].productId === action.payload.productId) {
                        si = i;
                        if (state.cartItems[i].topping.length === action.payload.topping.length) {
                            for (let j = 0; j < state.cartItems[i].topping.length; j++) {
                                if (state.cartItems[i].topping[j] === action.payload.topping[j]) {
                                    truth++;
                                }
                            }
                            if (truth === state.cartItems[i].topping.length && truth === action.payload.topping.length) {
                                if(state.cartItems[si].quantity >= 0 && state.cartItems[si].totalPrice >= 0){
                                    state.cartItems[si].quantity -= 1;
                                    state.cartItems[si].totalPrice -= action.payload.price;
                                    console.log(state.cartItems[si].quantity);
                                    console.log(state.cartItems[si].totalPrice);
                                }
                            }
                        }
                    }
                }
            }
            else {
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
            if (action.payload.topping) {
                for (let i = 0; i < state.cartItems.length; i++) {
                    if (state.cartItems[i].productId === action.payload.productId) {
                        si = i;
                        if (state.cartItems[i].topping.length === action.payload.topping.length) {
                            for (let j = 0; j < state.cartItems[i].topping.length; j++) {
                                if (state.cartItems[i].topping[j] === action.payload.topping[j]) {
                                    truth++;
                                }
                            }
                            if (truth === state.cartItems[i].topping.length && truth === action.payload.topping.length) {
                                state.cartItems[si].quantity += 1;
                                state.cartItems[si].totalPrice += action.payload.price;
                            }
                        }
                    }
                }
            }
            else {
                for (let i = 0; i < state.cartItems.length; i++) {
                    if (state.cartItems[i].productId === action.payload.productId) {
                        state.cartItems[i].quantity += 1;
                        state.cartItems[i].totalPrice += action.payload.price;
                        break;
                    }
                }
            }
        }, pizzaSize: (state, action) => {
            console.log(action.payload);
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
            var idx = 0;
            console.log(action.payload);
            for (let j = 0; j < action.payload.addons.length ; j++) {
                for (var i = 0; i < state.cartItems.length; i++) {
                    if (action.payload.addons[j].drink === state.cartItems[i].name) {
                        mo = true;
                        index = i;
                        state.cartItems[index].totalPrice += state.cartItems[index].price;
                        state.cartItems[index].quantity += 1;
                    }
                }
                if (!mo) {
                    // for (let i = 0; i < action.payload.addons.length; i++) {
                    state.cartItems.push({
                        name: action.payload.addons[j].drink,
                        price: action.payload.addons[j].price,
                        quantity: action.payload.addons[j].quantity,
                        totalPrice: action.payload.addons[j].price * action.payload.addons[j].quantity,
                        productId: action.payload.addons[j].productId
                    })
                    // }
                }
                mo = false;
            }
        }
    }
})

export const getCartItems = (state) => state.cart.cartItems;

export const { addItemToCart, addItemToCartSpecified, pizzaSize, topping, addons, RemoveItemToCart } = slice.actions;
export default slice.reducer;