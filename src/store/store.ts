import { configureStore, Store, ThunkAction, Action  } from '@reduxjs/toolkit'
import filterReducer from '../slices/filterSlice'
import cartReducer from '../slices/cartSlice'

export const store: Store = configureStore({
  reducer: {
    filter: filterReducer,
	cart: cartReducer,
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

