import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../features/state/recipesSlice';

export const store = configureStore({
    reducer: {
        recipes: recipesReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;