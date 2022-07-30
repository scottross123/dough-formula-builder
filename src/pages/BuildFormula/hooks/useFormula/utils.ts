import { formulaRow } from './useFormula'

export const sumFlourRatio = (formula: formulaRow[]): number  => {
    return formula.filter(row => row.isFlour)
        .reduce((sum, formulaRow) =>
            sum + formulaRow.ratio, 0
        );
}

export const sumFlourMetric = (formula: formulaRow[]): number  => {
    return formula.filter(row => row.isFlour)
        .reduce((sum, formulaRow) =>
            sum + formulaRow.metric, 0
        );
}

export const calcRatio = (formula: formulaRow[], metric: number): number => {
    return metric / sumFlourMetric(formula);
}

export const calcMetric = (formula: formulaRow[], ratio: number): number => {
    return ratio * sumFlourMetric(formula);
}

export const calcTotalRatio = (formula: formulaRow[]): number => {
    return formula.reduce(
        (sum, row) =>
            sum + row.ratio, 0
    );
}

export const calcTotalMetric = (formula: formulaRow[]) => {
    return formula.reduce(
        (sum, row) =>
            sum + row.metric, 0
    );
}

// validate flour function