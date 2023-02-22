import React from 'react';
import './styles/app.scss';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

const App: React.FC = () => {

	const [searchValue, setSearchValue] = React.useState('')

	return (
		<div className="wrapper">
			<Header
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<div className="content">
				<div className="container">
					<Routes>
						<Route path='/home' element={<Home searchValue={searchValue} />} />
						<Route path='/cart' element={<Cart />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
