import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slice/userSlice';
 

export const store = configureStore({
  reducer: {
    usersList: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
