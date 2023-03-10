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

export interface ISearchProps {
	searchValue: string
	setSearchValue?: (value: string) => void
}

export interface ISortType {
	name: string
	sort: string
}