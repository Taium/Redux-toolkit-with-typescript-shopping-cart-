// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// import thunk from "redux-thunk"
// import rootReducer from "./rootReducer";

// const store = createStore(
//     rootReducer,
//     {},
//     composeWithDevTools(applyMiddleware(thunk))
// );
// console.log(store)

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";
import productReducer from '../redux/product/productSlice';
import cartReducer from '../redux/cart/cartSlice';


export default configureStore({
  reducer: {
    carts: cartReducer,
    products: productReducer,
  },
});
export type RootState = ReturnType<typeof rootReducer>
