import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import appReducer from '../appSlice';
import cartReducer from '../features/cart/cartSlice';

import {apiSlice as cartApiSlice} from '../api/cartApiSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
    [cartApiSlice.reducerPath]: cartApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
