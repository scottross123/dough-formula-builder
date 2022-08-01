import { FormulaRow } from "./formulaSlice";

export const sumFlourRatio = (formula: FormulaRow[]): number  => {
    return formula.filter(row => row.isFlour)
        .reduce((sum, formulaRow) =>
            sum + formulaRow.ratio, 0
        );
}

export const sumFlourMetric = (formula: FormulaRow[]): number  => {
    return formula.filter(row => row.isFlour)
        .reduce((sum, formulaRow) =>
            sum + formulaRow.metric, 0
        );
}

export const calcRatio = (formula: FormulaRow[], metric: number): number => {
    return metric / sumFlourMetric(formula);
}

export const calcMetric = (formula: FormulaRow[], ratio: number): number => {
    return ratio * sumFlourMetric(formula);
}

export const calcTotalRatio = (formula: FormulaRow[]): number => {
    return formula.reduce(
        (sum, row) =>
            sum + row.ratio, 0
    );
}

export const calcTotalMetric = (formula: FormulaRow[]) => {
    return formula.reduce(
        (sum, formulaRow) =>
            sum + formulaRow.metric, 0
    );
}

// validate flour function