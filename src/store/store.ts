import { configureStore } from '@reduxjs/toolkit';
import editRecipeReducer from '../features/recipe/state/editRecipeSlice';
import {recipesApi} from "../features/recipe/api/recipesApi";

export const store = configureStore({
    reducer: {
        editRecipe: editRecipeReducer,
        [recipesApi.reducerPath]: recipesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(recipesApi.middleware)
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;