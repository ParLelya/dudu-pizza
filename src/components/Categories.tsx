import React, { memo } from 'react'

interface ICategory {
	categoryType: number
	setCategoryType: (id: number) => void
}

const categories: Array<string> = ['Все', 'Мясные', 'Вегетарианские', 'Острые']

const Categories: React.FC<ICategory> = memo(({ categoryType, setCategoryType }) => {
		
	return (
		<div className="categories">
			<ul>
				{categories.map((value, index) => {
					return <li
						key={index}
						onClick={() => setCategoryType(index)}
						className={categoryType === index ? 'active' : ''}
					>{value}</li>
				})}
			</ul>
		</div>
	)
})

export default Categories