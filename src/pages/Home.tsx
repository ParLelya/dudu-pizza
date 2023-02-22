import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Categories from '../components/Categories';
import Sorting from '../components/Sorting';
import Card from '../components/Card';
import MyLoader from '../components/MyLoader';
import { Pizza, ISearchProps } from '../types/data';
import Pagination from '../components/Pagination';

const Home: React.FC<ISearchProps> = ({ searchValue }) => {

	const [items, setItems] = useState([])
	const [category, setCategory] = useState(0)
	const [sortType, setSortType] = useState({ name: 'по убыванию популярности', sort: 'rating' })
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)

	const onPageChange = (page: number) => setCurrentPage(page)

	useEffect(() => {
		setIsLoading(true)

		const currentCategory = category > 0 ? `&category=${category}` : ''
		const sortBy = sortType.sort.replace('-', '')
		const order = sortType.sort.includes('-') ? 'asc' : 'desc'
		const search = searchValue ? `&search=${searchValue}` : ''
		const page = currentPage

		// fetch(
		// 	`https://63f38bd1de3a0b242b445773.mockapi.io/items?
		// page=${page}
		// &limit=4
		// ${currentCategory}
		// ${search}
		// &sortBy=${sortBy}
		// &order=${order}`
		// )
		// 	.then((response) => { response.json() })
		// 	.then((data: Pizza[]) => {
		// 		setTimeout(() => {
		// 			setItems(data)
		// 			setIsLoading(false)
		// 		}, 5000)
		// 	})

		window.scrollTo(0, 290)
	}, [category, sortType, searchValue, currentPage])

	const pizzas = items
		// .filter(obj => {
		// 	return obj.title.toLowerCase().includes(searchValue.toLowerCase())
		// })
		.map((obj: Pizza) => <Card {...obj} key={obj.id} />)

	const skeleton = [...new Array(3)].map((_, index) => <MyLoader key={index} />)

	return (
		<>
			<div className="content__top">
				<Categories categoryType={category} setCategoryType={(id) => setCategory(id)} />
				<Sorting sortType={sortType} setSortType={setSortType} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoading
						? skeleton
						: pizzas
				}
			</div>
			<Pagination onPageChange={(number) => onPageChange(number)} />
		</>)
}

export default Home