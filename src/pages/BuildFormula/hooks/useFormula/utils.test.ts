import { describe, expect, test } from "vitest";
import { formulaRow } from "./useFormula";
import { sumFlourMetric, sumFlourRatio } from "../../../../app/utils";

const formula: formulaRow[] = [
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

const formulaTwo: formulaRow[] = [
    {
        id: 1,
        name: 'Bread Flour',
        isFlour: true,
        metric: 250,
        ratio: .5,
    },
    {
        id: 2,
        name: 'Whole Wheat Flour',
        isFlour: true,
        metric: 250,
        ratio: .5,
    },
    {
        id: 3,
        name: 'Water',
        metric: 375,
        ratio: .75,
    },
    {
        id: 4,
        name: 'Salt',
        metric: 9,
        ratio: .018,
    },
    {
        id: 5,
        name: 'Yeast',
        metric: 5,
        ratio: .01,
    },
];

describe('sum flour values in formula', () => {
    describe('sum flour ratios in formula', () => {
        test('sum ratios of one flour', () => {
            expect(sumFlourRatio(formula)).toBe(1);
        });

        test('sum ratios of two flours', () => {
            expect(sumFlourRatio(formulaTwo)).toBe(1);
        });
    });

    describe('sum flour metrics in formula', () => {
        test('sum metrics of one flour', () => {
            expect(sumFlourMetric(formula)).toBe(500);
        });

        test('sum metrics of two flours', () => {
            expect(sumFlourMetric(formulaTwo)).toBe(500);
        });
    });
});