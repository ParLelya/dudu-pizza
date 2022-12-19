import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  price: number
  products: any[]
}

const initialState: CartState = {
	price: 0,
	products: []
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<any>) {
		state.products.push(action.payload)
    },
	removeProduct(state, action: PayloadAction<any>) {
		state.products = state.products.filter(obj => obj.id !== action.payload)
    },
	clearProducts(state) {
		state.products = []
    },
  },
})


export const { addProduct, removeProduct, clearProducts } = CartSlice.actions

export default CartSlice.reducer