export type Pizza = {
	id: number
	imageUrl: string
	title: string
	types: number[]
	sizes: number[]
	price: number
	category: number
	rating: number
}

export interface IProduct {
	id: number
	title: string
	price: number
	imageUrl: string
	type: string
	size: number
	count: number
}

export interface ISearchProps {
	searchValue: string
	setSearchValue?: (value: string) => void
}

export interface ISortType {
	name: string
	sort: string
}