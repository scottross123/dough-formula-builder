import {createDraftSafeSelector, createSelector} from '@reduxjs/toolkit';
import {FormulaRow} from "./formulaSlice";
import {RootState} from "./store";

export const selectFormula = (state: RootState) => state.formula;

const getFlours = (formula: FormulaRow[]): FormulaRow[] => {
    return formula.filter(row => row.isFlour);
}

export const selectFlours = createSelector(
    selectFormula,
    getFlours
);

const getTotalMetric = (formula: FormulaRow[]): number => {
    return formula.reduce(
        (sum, formulaRow) =>
            sum + formulaRow.metric, 0
    );
}

export const selectFlourWeight = createDraftSafeSelector(
    selectFlours,
    getTotalMetric,
)

const exampleState: { formula: FormulaRow[] } = {
    formula: [
        {
            id: 1,
            ingredient: 'Bread Flour',
            isFlour: true,
            metric: 450,
            ratio: .9,
        },
        {
            id: 3,
            ingredient: 'Rye Flour',
            isFlour: true,
            metric: 50,
            ratio: .1,
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
    ]
};

console.log(selectFormula(exampleState));
console.log(selectFlours(exampleState));
console.log(selectFlourWeight(exampleState));