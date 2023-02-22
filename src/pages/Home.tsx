import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Categories from '../components/Categories';
import Sorting from '../components/Sorting';
import Card from '../components/Card';
import MyLoader from '../components/MyLoader';
import { ISearchProps } from '../types/interface';
import Pagination from '../components/Pagination';

const Home: React.FC<ISearchProps> = ({ searchValue }) => {

	const [items, setItems] = useState([])
	const [category, setCategory] = useState(0)
	const [sortType, setSortType] = useState({ name: 'популярности', sort: 'rating' })
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)

		const currentCategory = category > 0 ? `category=${category}` : ''
		const sortBy = sortType.sort.replace('-', '')
		const order = sortType.sort.includes('-') ? 'asc' : 'desc'
		const search = searchValue ? `&search=${searchValue}` : ''

		fetch(
			`https://63f38bd1de3a0b242b445773.mockapi.io/items?${currentCategory}${search}&sortBy=${sortBy}&order=${order}`
		)
			.then((response) => { response.json() })
			.then((data: any) => {
				setTimeout(() => {
					setItems(data)
					setIsLoading(false)
				}, 5000)
			})
		window.scrollTo(0, 0)
	}, [category, sortType, searchValue])

	const pizzas = items
		// .filter(obj => {
		// 	return obj.title.toLowerCase().includes(searchValue.toLowerCase())
		// })
		.map((obj: any) => <Card {...obj} key={obj.id} />)

	const skeleton = [...new Array(4)].map((_, index) => <MyLoader key={index} />)

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
			<Pagination/>
		</>)
}

export default Home