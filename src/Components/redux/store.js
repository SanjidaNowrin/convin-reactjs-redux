import { configureStore } from "@reduxjs/toolkit";
import employeeDashboardReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        user: employeeDashboardReducer
    }
})