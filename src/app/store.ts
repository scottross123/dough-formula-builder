import { configureStore } from '@reduxjs/toolkit';
import formulaReducer from './formulaSlice';

export const store = configureStore({
    reducer: {
        formula: formulaReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;