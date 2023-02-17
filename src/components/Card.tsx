import React from 'react'
import CardBottom from './CardBottom'

// interface IItem {
// 	title: string,
// 	price: number
// }

const Card: React.FC = () => {
	const title: string = "Чизбургер-пицца" 

	return (
		<div className="pizza-block">
			<img
				className="pizza-block__image"
				src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
				alt="Pizza"
			/>
			<h4 className="pizza-block__title">{title}</h4>
			<div className="pizza-block__selector">
				<ul>
					<li className="active">тонкое</li>
					<li>традиционное</li>
				</ul>
				<ul>
					<li className="active">26 см</li>
					<li>30 см</li>
					<li>40 см</li>
				</ul>
			</div>
			<CardBottom />
		</div>
	)
}

export default Card