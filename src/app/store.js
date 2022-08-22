import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/admin/adminSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
