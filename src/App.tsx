import React from 'react';
import { Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import { ISearchProps } from './types/data';

import './styles/app.scss';

const defaultContext: ISearchProps = {searchValue: ''}
export const SearchContext = React.createContext<ISearchProps>(defaultContext)

const App: React.FC = () => {
	
	const [searchValue, setSearchValue] = React.useState('')

	return (
		<div className="wrapper">
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header searchValue={searchValue} setSearchValue={setSearchValue}/>
				<div className="content">
					<div className="container">
						<Routes>
							<Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/>} />
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
