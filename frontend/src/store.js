import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { productsReducer, newProductReducer, productReducer, productDetailsReducer } from './reducers/productReducers'
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import { newOrderReducer, myOrdersReducer, orderDetailsReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
    product: productsReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ?
            JSON.parse(localStorage.getItem('cartItems')) : [],
        requestInfo: localStorage.getItem('requestInfo') ?
            JSON.parse(localStorage.getItem('requestInfo')) : {}
    }
};

const middlware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlware))
);


export default store;