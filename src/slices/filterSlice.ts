import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISortType } from '../types/data'

export interface FilterState {
  	category: number
	currentPage: number
  	sortType: ISortType
}

const initialState: FilterState = {
	category: 0,
	currentPage: 1,
	sortType: { name: 'по убыванию популярности', sort: 'rating' }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>) {
		state.category = action.payload
    },
	setSort(state, action: PayloadAction<ISortType>) {
		state.sortType = action.payload
	},
	setPage(state, action: PayloadAction<number>) {
		state.currentPage = action.payload
	},
	setFilters(state, action: PayloadAction<FilterState>) {
		state.category = Number(action.payload.category)
		state.currentPage = Number(action.payload.currentPage)
		state.sortType = action.payload.sortType
	}
  },
})


export const { setCategory, setSort, setPage, setFilters } = filterSlice.actions

export default filterSlice.reducer