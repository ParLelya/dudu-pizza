import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../types/data'
import { RootState } from '../store/store'

export interface CartState {
  totalPrice: number
  products: IProduct[]
  totalProductsCount: number
}

const initialState: CartState = {
	totalPrice: 0,
	products: [],
	totalProductsCount: 0
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<any>) {
		const findProduct = state.products.find(obj => obj.id === action.payload.id)

		if (findProduct) {
			findProduct.count++
		} else {
			state.products.push({
				...action.payload, count: 1
			})
		}

		state.totalPrice = state.products.reduce((sum, obj) => {
			return obj.price * obj.count + sum
		}, 0)

		state.totalProductsCount = state.products.reduce((sum, item) => {
			return sum + item.count
		}, 0)
    },
	removeProduct(state, action: PayloadAction<number>) {
		state.products = state.products.filter(obj => obj.id !== action.payload)
		
		state.totalPrice = state.products.reduce((sum, obj) => {
			return obj.price * obj.count + sum
		}, 0)

		state.totalProductsCount = state.products.reduce((sum, item) => {
			return sum + item.count
		}, 0)
    },
	clearProducts(state) {
		state.products = []
		state.totalPrice = 0
		state.totalProductsCount = 0
    },
	minusCount(state, action: PayloadAction<number>) {
		const findProduct = state.products.find((obj: IProduct) => obj.id === action.payload)

		if (findProduct) {
			findProduct.count--
		}

		state.totalProductsCount = state.products.reduce((sum, item) => {
			return sum + item.count
		}, 0)

		state.totalPrice = state.products.reduce((sum, obj) => {
			return obj.price * obj.count + sum
		}, 0)
	},
  },
})

export const cartSelector = (state: RootState) => state.cart
export const cartItemSelector = (id: number) => (state: RootState) => state.cart.products.find((obj: IProduct) => obj.id === id)

export const { addProduct, removeProduct, clearProducts, minusCount } = CartSlice.actions

export default CartSlice.reducer