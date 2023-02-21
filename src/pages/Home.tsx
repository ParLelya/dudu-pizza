import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Categories from '../components/Categories';
import Sorting from '../components/Sorting';
import Card from '../components/Card';
import MyLoader from '../components/MyLoader';

const Home: React.FC = () => {

	const [items, setItems] = useState([])
	const [category, setCategory] = useState(0)
	const [sortType, setSortType] = useState({ name: 'популярности', sort: 'rating' })
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)

		const currentCategory = category > 0 ? `category=${category}` : ''
		const sortBy = sortType.sort.replace('-', '')
		const order = sortType.sort.includes('-') ? 'asc' : 'desc'

		fetch(
			`https://63f38bd1de3a0b242b445773.mockapi.io/items?${currentCategory}&sortBy=${sortBy}&order=${order}`
		)
			.then((response) => { response.json() })
			.then((data) => {
				setTimeout(() => {
					setItems(data)
					setIsLoading(false)
				}, 5000)
			})
		window.scrollTo(0, 0)
	}, [category, sortType])

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
						? [...new Array(6)].map((_, index) => <MyLoader key={index} />)
						: (items.map((obj: any) => <Card {...obj} key={obj.id} />))
				}
			</div>
		</>)
}

export default Home