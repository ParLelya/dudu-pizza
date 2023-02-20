import React, { useState } from 'react'

const Categories: React.FC = () => {

	const [active, setActive] = useState(0)
	const categories: Array<string> = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые',]

	return (
		<div className="categories">
			<ul>
				{categories.map((value, index) => {
					return <li
						key={index}
						onClick={() => setActive(index)}
						className={active === index ? 'active' : ''}
					>{value}</li>
				})}
			</ul>
		</div>
	)
}

export default Categories