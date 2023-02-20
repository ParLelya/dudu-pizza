import React, { useState, useEffect } from 'react';
import './styles/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sorting from './components/Sorting';
import Card from './components/Card';
import MyLoader from './components/MyLoader';

const App: React.FC = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('https://63f38bd1de3a0b242b445773.mockapi.io/items')
			.then((response) => { response.json() })
			.then((data: any) => {
				setTimeout(() => {
					setItems(data)
					setIsLoading(false)
				}, 1000)
			})
	}, [])

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sorting />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{
							isLoading
								? [...new Array(6)].map((_, index) => <MyLoader key={index} />)
								: (items.map((obj: any) => <Card {...obj} key={obj.id} />))
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
