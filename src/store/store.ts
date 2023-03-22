import { configureStore, Store, ThunkAction, Action  } from '@reduxjs/toolkit'
import filterReducer from '../slices/filterSlice'
import cartReducer from '../slices/cartSlice'
import productsReducer from '../slices/productSlice'

export const store: Store = configureStore({
  reducer: {
    filter: filterReducer,
	cart: cartReducer,
	products: productsReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

