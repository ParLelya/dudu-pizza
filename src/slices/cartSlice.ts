import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../types/data'
import { RootState } from '../store/store'
import { getCartFromLS, getTotalCount, getTotalPrice } from '../utils/getCartData'

export interface CartState {
  totalPrice: number
  products: IProduct[]
  totalProductsCount: number
}

const data = getCartFromLS()

const initialState: CartState = {
	totalPrice: data.totalPrice,
	products: data.products,
	totalProductsCount: data.totalProductsCount
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
		const findProduct = state.products.find(obj => obj.id === action.payload.id)

		if (findProduct) {
			findProduct.count++
		} else {
			state.products.push({
				...action.payload, count: 1
			})
		}

		state.totalPrice = getTotalPrice(state.products)
		state.totalProductsCount = getTotalCount(state.products)
    },
	removeProduct(state, action: PayloadAction<number>) {
		state.products = state.products.filter(obj => obj.id !== action.payload)
		
		state.totalPrice = getTotalPrice(state.products)
		state.totalProductsCount = getTotalCount(state.products)
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

		state.totalPrice = getTotalPrice(state.products)
		state.totalProductsCount = getTotalCount(state.products)
	},
  },
})

export const cartSelector = (state: RootState) => state.cart
export const cartItemSelector = (id: number) => (state: RootState) => state.cart.products.find((obj: IProduct) => obj.id === id)

export const { addProduct, removeProduct, clearProducts, minusCount } = CartSlice.actions

export default CartSlice.reducer