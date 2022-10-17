import { combineReducers } from "redux";
import productReducer from '../redux/product/productSlice';
import cartReducer from '../redux/cart/cartSlice';

const rootReducer = combineReducers({
    carts: cartReducer,
    products: productReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
