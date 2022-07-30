import { useReducer } from 'react';
import { sumFlourRatio, sumFlourMetric, calcMetric, calcRatio, calcTotalRatio, calcTotalMetric } from "./utils";

enum ACTIONS {
    UPDATE_METRIC = 'update-metric',
    UPDATE_RATIO = 'update-ratio',
}

type Action =
    | { type: ACTIONS.UPDATE_METRIC; payload: { id: number, metric: number } }
    | { type: ACTIONS.UPDATE_RATIO; payload: { id: number, ratio: number } }

export type formulaRow = {
    id: number,
    ingredient: string,
    isFlour?: boolean,
    metric: number,
    ratio: number,
}

type formulaState = { formula: formulaRow[] };

const useFormula = () =>  {
    const initialFormula: formulaState = {
        formula: [
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
        ]
    };

    const reducer = (state: formulaState, action: Action): formulaState => {
        const { type, payload } = action;

        switch (type) {
            case ACTIONS.UPDATE_METRIC: {
                const {id, metric} = payload;
                const {formula} = state;
                const index = formula.findIndex(formulaRow => formulaRow.id === id);
                return {
                    formula:
                        [
                            ...formula.slice(0, index),
                            {
                                ...formula[index],
                                id: id,
                                metric: metric,
                                ratio: calcRatio(state.formula, metric),
                            },
                            ...formula.slice(index)
                        ]
                }
            }
            case ACTIONS.UPDATE_RATIO: {
                const {id, ratio} = payload;
                const {formula} = state;
                const index = formula.findIndex(row => row.id === id);
                return {
                    formula:
                        [
                            ...formula.slice(0, index),
                            {
                                ...formula[index],
                                id: id,
                                metric: calcMetric(state.formula, ratio),
                                ratio: ratio,
                            },
                            ...formula.slice(index)
                        ]
                }
            }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialFormula);

    const updateMetric = (row: formulaRow): void => {
        const { id, metric } = row;
        dispatch({ type: ACTIONS.UPDATE_METRIC, payload: { id, metric } });
    }

    const updateRatio = (row: formulaRow): void => {
        const { id, ratio } = row;
        dispatch({ type: ACTIONS.UPDATE_RATIO, payload: { id, ratio } });
    }

    const getTotalMetric = (): number => {
        const { formula } = state;
        return calcTotalMetric(formula);
    }

    const getTotalRatio = (): number => {
        const { formula } = state;
        return calcTotalRatio(formula);
    }

    return { state, updateMetric, updateRatio, getTotalMetric, getTotalRatio };
}

export default useFormula;