import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {calcMetric, calcRatio} from "./utils";
import {RootState} from "./store";

export type FormulaRow = {
    id: number,
    ingredient: string,
    isFlour?: boolean,
    metric: number,
    ratio: number,
}

type FormulaState = FormulaRow[];

const initialState: FormulaState = [
    {
        id: 1,
        ingredient: 'Bread Flour',
        isFlour: true,
        metric: 500,
        ratio: 1.0,
    },
    {
        id: 2,
        ingredient: 'Water',
        metric: 375,
        ratio: .75,
    },
    {
        id: 3,
        ingredient: 'Salt',
        metric: 9,
        ratio: .018,
    },
    {
        id: 4,
        ingredient: 'Yeast',
        metric: 5,
        ratio: .01,
    },
];

const formulaSlice = createSlice({
    name: 'formula',
    initialState,
    reducers: {
        addIngredient: (state, action) => {
          state.push(action.payload)
        },
        updateMetric: (state, action: PayloadAction<{ id: number, newMetric: number }>) => {
            const { id, newMetric } = action.payload;
            const formulaRow = state.find((formulaRow) => formulaRow.id === id)
            formulaRow!.metric = newMetric;
            //state[1].ratio = calcRatio(state[1], action.payload.metric);
        },
        testReducer: (state) => {
            state[1].metric += 100;
        }

    }
});
export const selectFormula = (state: RootState) => state.formula;
export const { addIngredient, updateMetric, testReducer } = formulaSlice.actions;
export default formulaSlice.reducer;

