import React, { createContext } from 'react';
import './styles/app.scss';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { ISearchProps } from './types/data';

export const SearchContext = createContext<ISearchProps>()

const App: React.FC = () => {

	const [searchValue, setSearchValue] = React.useState('')

	return (
		<div className="wrapper">
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path='/home' element={<Home searchValue={searchValue} />} />
							<Route path='/cart' element={<Cart />} />
							<Route path="/*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</SearchContext.Provider>
		</div>
	);
}

export default App;
