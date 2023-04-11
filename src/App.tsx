import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Product from './pages/Product';
import './styles/app.scss';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {

	return (
		<div className="container">
			<Routes>
				<Route path='/' element={<MainLayout />} >
					<Route path='' element={<Home />} />
					<Route path='cart' element={<Cart />} />
					<Route path='product/:id' element={<Product />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
