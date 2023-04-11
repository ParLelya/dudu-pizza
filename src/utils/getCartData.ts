import { IProduct } from "../types/data"

export const getTotalPrice = (items: IProduct[]) => {
	const totalPrice = items.reduce((sum, obj) => {
		return obj.price * obj.count + sum
	}, 0)
	return totalPrice
}

export const getTotalCount = (items: IProduct[]) => {
	const totalProductsCount = items.reduce((sum, item) => {
		return sum + item.count
	}, 0)
	return totalProductsCount
}

export const getCartFromLS = () => {
	const data = localStorage.getItem('cart') 
	const products = data ? JSON.parse(data) as IProduct[] : []
	const totalPrice = getTotalPrice(products)
	const totalProductsCount = getTotalCount(products)

	return {
		products,
		totalPrice,
		totalProductsCount
	}
}