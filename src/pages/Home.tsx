import React, { useEffect, /*useRef*/ } from 'react'
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import type { RootState } from '../store/store';
import { setCategory, setPage, /*setFilters*/ } from '../slices/filterSlice';
import { fetchPizzas } from '../slices/productSlice';
import Categories from '../components/Categories';
import Sorting from '../components/Sorting';
import Card from '../components/Card';
import MyLoader from '../components/MyLoader';
import Pagination from '../components/Pagination';
import { Pizza } from '../types/data';


// import { sortArray } from './../components/Sorting';

const Home: React.FC = () => {

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	// const isSearching = useRef(false)

	const { category, sortType, currentPage, searchValue} = useAppSelector((state: RootState) => state.filter)
	const { pizzas, isLoading } = useAppSelector((state: RootState) => state.products)

	const setCategoryType = (id: number) => {
		dispatch(setCategory(id))
	}

	const onPageChange = (page: number) => dispatch(setPage(page))

	// useEffect(() => {
	// 	if (window.location.search) {
	// 		const params = qs.parse(window.location.search.substring(1))

	// 		const sortType = sortArray.find(obj => obj.sort === params.sortType)
	// 		dispatch(
	// 			setFilters({...params, sortType})
	// 		)
	// 		isSearching.current = true
	// 	}
	// }, [])

	const getPizzas = async () => {
		const currentCategory = category > 0 ? `&category=${category}` : ''
		const sortBy = sortType.sort.replace('-', '')
		const order = sortType.sort.includes('-') ? 'asc' : 'desc'
		const search = searchValue ? `&search=${searchValue}` : ''
		const page = currentPage
		
		dispatch(fetchPizzas({currentCategory, sortBy, order, page, search}))
		// if (!isSearching.current) {}

		window.scrollTo(0, 290)
	}

	useEffect(() => {
		getPizzas()
		const queryString = qs.stringify({
			sort: sortType.sort,
			category: category,
			page: currentPage
		})
		navigate(`?${queryString}`)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category, sortType.sort, currentPage])

	const products: JSX.Element[] = pizzas.map((obj: Pizza) => <Card {...obj} key={obj.id} />)

	const skeleton = [...new Array(4)].map((_, index) => <MyLoader key={index} />)

	return (
		<>
			<div className="content__top">
				<Categories categoryType={category} setCategoryType={setCategoryType} />
				<Sorting />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoading
						? skeleton
						: products
				}
			</div>
			<Pagination onPageChange={onPageChange} value={currentPage} />
		</>)
}

export default Home