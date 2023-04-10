import React from 'react'
import { Pizza } from '../types/data'
import { Link } from 'react-router-dom'
import CardBottom from './CardBottom'

const Card: React.FC<Pizza> = (props) => {

	const { id, title, imageUrl } = props

	return (
		<div className="pizza-block">
			<Link to={`/product/${id}`}>
				<img
					className="pizza-block__image"
					src={imageUrl}
					alt="Pizza"
				/>
				<h4 className="pizza-block__title">{title}</h4>
			</Link>
			<CardBottom {...props}/>
		</div>)
}

export default Card