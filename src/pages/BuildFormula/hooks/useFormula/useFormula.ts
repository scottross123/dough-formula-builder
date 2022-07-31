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

export type formulaState = { formula: formulaRow[] };

const useFormula = (initialFormula: formulaState) =>  {
    const reducer = (state: formulaState, action: Action): formulaState => {
        const { type, payload } = action;

        switch (type) {
            case ACTIONS.UPDATE_METRIC: {
                const { id, metric } = payload;
                const { formula } = state;
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

    const updateMetric = (id: number, metric: number): void => {
        dispatch({ type: ACTIONS.UPDATE_METRIC, payload: { id, metric } });
    }

    const updateRatio = (id: number, ratio: number): void => {
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