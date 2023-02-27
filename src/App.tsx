import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './redux/store';
import { setSearchValue } from './redux/slices/filterSlice';
import { Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import './styles/app.scss';
// import type { RootState } from './redux/store'
// import { useSelector, useDispatch } from 'react-redux'

// export const SearchContext = createContext<ISearchProps>('')

const App: React.FC = () => {
	const dispatch = useDispatch()
	const searchValue = useSelector((state: RootState) => state.filter.searchValue)
	const setSearch = (value: string) => {
		dispatch(setSearchValue(value))
	}
	
	// const [searchValue, setSearchValue] = React.useState('')

	return (
		<div className="wrapper">
			{/* <SearchContext.Provider value={{ searchValue, setSearchValue }}> */}
				<Header searchValue={searchValue} setSearchValue={setSearch}/>
				<div className="content">
					<div className="container">
						<Routes>
							<Route path='/home' element={<Home searchValue={searchValue} setSearchValue={setSearch}/>} />
							<Route path='/cart' element={<Cart />} />
							<Route path="/*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			{/* </SearchContext.Provider> */}
		</div>
	);
}

export default App;
