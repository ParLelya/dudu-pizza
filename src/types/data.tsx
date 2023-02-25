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
	setSearchValue?: React.Dispatch<React.SetStateAction<string>>
}
