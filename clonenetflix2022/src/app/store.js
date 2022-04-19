import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/UserSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
