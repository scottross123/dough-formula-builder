import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../features/recipe/state/recipesSlice';
import {apiSlice} from "../api/apiSlice";

export const store = configureStore({
    reducer: {
        recipe: recipesReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;