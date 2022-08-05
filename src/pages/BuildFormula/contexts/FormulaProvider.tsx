import { createContext, useMemo, ReactNode, FC, ComponentType } from "react";
import useFormula, {formulaRow, formulaState} from "../hooks/useFormula/useFormula";

const defaultFormula: formulaRow[] = [
    {
        id: 1,
        name: 'Bread Flour',
        isFlour: true,
        metric: 500,
        ratio: 1.0,
    },
    {
        id: 2,
        name: 'Water',
        metric: 375,
        ratio: .75,
    },
    {
        id: 3,
        name: 'Salt',
        metric: 9,
        ratio: .018,
    },
    {
        id: 4,
        name: 'Yeast',
        metric: 5,
        ratio: .01,
    },
];

type FormulaContextType = {
    state: formulaState,
    updateMetric: (id: number, newMetric: number) => void,
    updateRatio: (id: number, newRatio: number) => void,
    getTotalMetric: () => number,
    getTotalRatio: () => number,
}

export const FormulaContext = createContext<FormulaContextType | null>(null);

type FormulaProviderProps = {
    children?: ReactNode
}

export const FormulaProvider = ( props: FormulaProviderProps ) => {
    const { children } = props;

    const {
        state,
        updateMetric,
        updateRatio,
        getTotalMetric,
        getTotalRatio
    } = useFormula({formula: defaultFormula});
    const value = useMemo(() => ({
        state, updateMetric, updateRatio, getTotalMetric, getTotalRatio
    }), []);

    return (
        <FormulaContext.Provider value={value}>
            {children}
        </FormulaContext.Provider>
    );
}

export default FormulaProvider;