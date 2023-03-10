import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISortType } from '../../types/data'

export interface FilterState {
	// searchValue: string
  	category: number
	currentPage: number
  	sortType: ISortType
}

const initialState: FilterState = {
	// searchValue: '',
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
	}
	// setSearchValue(state, action: PayloadAction<string>) {
	// 	state.searchValue = action.payload
	// }
  },
})

// Action creators are generated for each case reducer function
export const { setCategory, setSort, setPage } = filterSlice.actions

export default filterSlice.reducer