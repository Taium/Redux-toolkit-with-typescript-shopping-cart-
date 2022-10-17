import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";


interface product{
    id: number;
    title?: string,
    total_qty: number;
    total_price: number;
}

const initialState = [
    {
        id: 0,
        title: '',
        price: 0,
        available_qty: 0,
        total_price:0,
        total_qty:0
    },
   
];

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        cincrement: (state, action) => {
            const cartProduct = state.map((product:product)=>({
                ...product,
            }));
            const itemIndex = cartProduct.findIndex((product:product)=> product.id === action.payload.id);

            if(itemIndex > -1){
                cartProduct[itemIndex].total_qty = cartProduct[itemIndex].total_qty + 1;
                cartProduct[itemIndex].total_price = cartProduct[itemIndex].total_price + action.payload.price;

                return cartProduct;

            }else{
                return [
                    ...state,
                    {
                        ...action.payload,
                        total_qty:1,
                        total_price: action.payload.price,
                    }
                ]
            }
      },
        cdecrement: (state, action) => {
            var cartProducts = state.map((product)=>({
                ...product,
            }));
            const itemIndexNo = cartProducts.findIndex((product:product)=> product.id === action.payload.id);

            if(cartProducts[itemIndexNo].total_qty === 1){
                return state.filter((product:product) => product.id !== action.payload.id);
            }
            else if(itemIndexNo > -1){
                cartProducts[itemIndexNo].total_qty = cartProducts[itemIndexNo].total_qty - 1;
                cartProducts[itemIndexNo].total_price = cartProducts[itemIndexNo].total_price - action.payload.price;
                return cartProducts;

            }else{
                return [...state ]
            }
      }
    }
  })
  export default cartSlice.reducer
export const { cincrement, cdecrement } = cartSlice.actions