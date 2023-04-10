export type Pizza = {
	id: number | string
	imageUrl: string
	title: string
	composition: string
	types: number[]
	sizes: number[]
	price: number
	category: number
	rating: number
}

export interface IProduct {
	id: number | string
	title: string
	imageUrl: string
	composition: string
	price: number
	type: string
	size: number
	count: number
}

export interface ISortType {
	name: string
	sort: string
}