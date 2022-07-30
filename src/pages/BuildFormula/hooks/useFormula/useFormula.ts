import { useReducer } from 'react';

enum ACTIONS {
    UPDATE_METRIC = 'update-metric',
    UPDATE_PERCENTAGE = 'update-percentage',
}

type Action =
    | { type: ACTIONS.UPDATE_METRIC; payload: number }
    | { type: ACTIONS.UPDATE_PERCENTAGE; payload: number }

type formulaRow = {
    id: number,
    ingredient: string,
    isFlour?: true,
    metric: number,
    percent: number,
}

type formulaState = formulaRow[];

// functions needed: calculate ratio, calculate metric, calculate yield ratio, calculate yield metric

const useFormula = () =>  {
    const initialFormula: formulaState = [
        {
            id: 1,
            ingredient: 'Bread Flour',
            isFlour: true,
            metric: 500,
            percent: 1.0,
        },
        {
            id: 2,
            ingredient: 'Water',
            metric: 375,
            percent: .75,
        },
        {
            id: 3,
            ingredient: 'Salt',
            metric: 9,
            percent: .018,
        },
        {
            id: 4,
            ingredient: 'Yeast',
            metric: 5,
            percent: .01,
        },
        {
            id: 4,
            ingredient: 'Yield',
            metric: calculateYield
        }
    ];

    const reducer = (state: formalaState, action: Action): formulaState => {
        const { type, payload } = action;

        switch (type) {
            case ACTIONS.UPDATE_METRIC:
                return {
                    ...state,
                    metric: payload,
                    percent: calculatePercent()
                }
        }
    }
}

export default useFormula;