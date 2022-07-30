import { describe, expect, test } from "vitest";
import useFormula, { formulaRow } from "./useFormula";
import { renderHook, act } from "@testing-library/react";

const formula: formulaRow[] = [
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
        metric: 400,
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

const formulaTwo: formulaRow[] = [
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
        ratio: .8,
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

describe('useFormula tests', () => {
    test('update metric value', () => {
        const { result } = renderHook(useFormula);
        act(() =>  {
            result.current.updateMetric(formula[1]);
        });
        expect(result.current.state.formula[1].ratio).toBe(.8);
    });

    test('update ratio value', () => {
        const { result } = renderHook(useFormula);
        act(() =>  {
            result.current.updateRatio(formulaTwo[1]);
        });
        expect(result.current.state.formula[1].metric).toBe(400);
    });
});