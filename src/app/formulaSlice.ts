import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {calcMetric, calcRatio} from "./utils";
import {RootState} from "./store";
import {selectFlourWeight} from "./selectors";

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
        removeIngredient: (state, action) => {
          state.push(action.payload)
        },
        updateMetric: (state, action: PayloadAction<{ id: number, newMetric: number }>) => {
            const { id, newMetric } = action.payload;
            const formulaRow = state.find((formulaRow) => formulaRow.id === id);
            formulaRow!.metric = newMetric;
        },
        calcRatioFromMetric: (state, action: PayloadAction<{ id: number, metric: number }>) => {
            const { id, metric } = action.payload;
            const formulaRow = state.find((formulaRow) => formulaRow.id === id);
            const flourRows = state.filter(row => row.isFlour);
            const flourMetric = flourRows.reduce((sum, formulaRow) => sum + formulaRow.metric, 0);
            console.log({"metric": metric, "flourRows": flourRows, "flourMetric": flourMetric, "calc": metric/flourMetric})
            formulaRow!.ratio = metric / flourMetric;
        },
        updateRatio: (state, action: PayloadAction<{ id: number, newMetric: number }>) => {
            const { id, newMetric } = action.payload;
            const formulaRow = state.find((formulaRow) => formulaRow.id === id);
            formulaRow!.metric = newMetric;
        },
        calcMetricFromRatio: (state, action: PayloadAction<{ id: number, metric: number }>) => {
            const { id, metric } = action.payload;
            const formulaRow = state.find((formulaRow) => formulaRow.id === id);
            //formulaRow!.ratio = calcRatio(formulaRow, metric)
        },
    }
});

export const { addIngredient, updateMetric, calcRatioFromMetric } = formulaSlice.actions;
export default formulaSlice.reducer;

