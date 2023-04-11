import React, { useState } from 'react'
import { cartItemSelector, addProduct } from '../slices/cartSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Pizza } from '../types/data'

const CardBottom: React.FC<Pizza> = (props) => {

	const dispatch = useAppDispatch()
	const { id, title, price, imageUrl, sizes, types } = props
	const productInCart = useAppSelector(cartItemSelector(id as number))
	const doughType = ["тонкое", "пышное"]
	const [dough, setDough] = useState(0)
	const [diameter, setDiameter] = useState(0)

	const count = productInCart ? productInCart.count : 0

	const addClick = () => {
		const item = {
			id,
			title,
			price,
			imageUrl,
			type: doughType[dough],
			size: sizes[diameter],
		}
		dispatch(addProduct(item))
	}

	return (
		<>
			<div className="pizza-block__selector">
				<ul>
					{
						types.map((type, index) => {
							return <li
								key={index}
								onClick={() => setDough(index)}
								className={dough === index ? 'active' : ''}
							>{doughType[type]}</li>
						})
					}
				</ul>
				<ul>
					{
						sizes.map((size, index) => {
							return (
								<li
									key={size}
									onClick={() => setDiameter(index)}
									className={diameter === index ? 'active' : ''}
								>{size} см</li>
							)
						})
					}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {price} ₽</div>
				<button
					onClick={addClick}
					className="button button--outline button--add"
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					{count > 0 && <i>{count}</i>}
				</button>
			</div>
		</>
	)
}

export default CardBottom