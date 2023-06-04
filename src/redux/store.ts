import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { userApi } from './services/userApi';
setupListeners
export const store = configureStore({
  reducer: {
    [userApi.reducerPath] : userApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => (
    
  )
    
  ,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
