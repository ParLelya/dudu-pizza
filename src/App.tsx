import React from 'react';

import { Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import { ISearchProps } from './types/data';

import './styles/app.scss';
// import type { RootState } from './redux/store'
// import { useSelector, useDispatch } from 'react-redux'
// import { setSearchValue } from './redux/slices/filterSlice';

export const SearchContext = React.createContext<ISearchProps>('')

const App: React.FC = () => {
	
	// const dispatch = useDispatch()
	// const searchValue = useSelector((state: RootState) => state.filter.searchValue)
	// const setSearch = (value: string) => {
	// 	dispatch(setSearchValue(value))
	// }
	
	const [searchValue, setSearchValue] = React.useState('')

	return (
		<div className="wrapper">
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header searchValue={searchValue} setSearchValue={setSearchValue}/>
				<div className="content">
					<div className="container">
						<Routes>
							<Route path='/home' element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/>} />
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
