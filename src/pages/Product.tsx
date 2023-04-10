import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchPizza } from '../slices/productSlice';
import { RootState } from '../store/store';
import MyLoader from '../components/MyLoader';
import CardBottom from '../components/CardBottom';
import { Link } from 'react-router-dom';

const Product: React.FC = () => {

	const dispatch = useAppDispatch()
	const { id } = useParams()
	const { product, isLoading } = useAppSelector((state: RootState) => state.products)
	useEffect(() => {
		dispatch(fetchPizza(id!))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		isLoading
			? <MyLoader />
			: <div>
				<div className='product-full'>
					<img
						src={product.imageUrl}
						alt='pizza'
						className='product-full__image'
					/>

					<div className='product-full__description'>
						<h2>
							{product.title}
						</h2>
						<p>
							{product.composition}
						</p>
						<div style={{ width: '90%', margin: '0 auto' }}>
							<CardBottom {...product} />
						</div>
						<Link
							to="/"
							className="button go-back-btn"
							style={{ margin: '1rem auto' }}
						>
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								style={{ transform: 'translateY(10%)' }}
							>
								<path
									d="M7 13L1 6.93015L6.86175 1"
									stroke="#D3D3D3"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span>Вернуться назад</span>
						</Link>
					</div>
				</div>
			</div >
	)
}

export default Product