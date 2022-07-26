import { configureStore } from '@reduxjs/toolkit';
import editRecipeReducer from '../features/recipe/state/editRecipeSlice';
import {recipesApi} from "../api/recipesApi";
import modalReducer from "../components/AppModals/modalSlice"

export const store = configureStore({
    reducer: {
        editRecipe: editRecipeReducer,
        modal: modalReducer,
        [recipesApi.reducerPath]: recipesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(recipesApi.middleware)
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;