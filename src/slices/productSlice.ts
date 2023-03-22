import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Pizza } from '../types/data'
import axios from 'axios'

export interface ProductsState {
	pizzas: Pizza[]
	isLoading: boolean
}

const initialState: ProductsState = {
	pizzas: [{
		id: 0,
		title:  '',
		price:  0,
		imageUrl:  '',
		types: [0],
		sizes: [0],
		category: 0,
		rating: 0
	}],
	isLoading: true
}

export const fetchPizzas = createAsyncThunk<any,any, {rejectValue: string}>(
	'product/fetchPizzas',
	async ({page, currentCategory, search, sortBy, order}, {rejectWithValue}) => {
		const { data } = await axios.get<Pizza[]>(
			`https://63f38bd1de3a0b242b445773.mockapi.io/items?
		page=${page}
		&limit=4
		${currentCategory}
		${search}
		&sortBy=${sortBy}
		&order=${order}`, {
			headers: {
				"Content-Type": "application/json"
			},
		})
		if (!data) {
			return rejectWithValue('Произошла ошибка при регистрации')
		}
		return data
	}
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Pizza[]>) {
		state.pizzas = action.payload
    },
  },
  extraReducers(builder) {
	builder
		.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload;
			state.isLoading = false
		})
		.addCase(fetchPizzas.rejected, (state) => {
			console.error('Ошибка при загрузке товаров')
			state.isLoading = false
			state.pizzas = []
		})
  },
})


export const { setProducts } = productsSlice.actions

export default productsSlice.reducer