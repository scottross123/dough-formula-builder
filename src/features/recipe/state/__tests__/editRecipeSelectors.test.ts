import { describe, it, expect } from "vitest";
import brioche from "../../../../assets/images/brioche.jpeg";
import {v4 as uuidv4} from "uuid";
import {
    selectIngredient,
    selectPffWeight,
    selectPreferment,

    selectPrefermentTotalRatio, selectPrefermentTotals, selectPrefermentWeight, selectTotalFlourWeight
} from "../editRecipeSelectors";
import { Recipe } from "../../types";

const recipe: Recipe = {
    id: "bread3",
    title: 'Rich Man\'s Brioche',
    description: 'A French bread and Viennoiserie made with a high proportion of egg and butter.',
    author: 'Osono',
    image: brioche,
    yields: {
        unitWeight: 800,
        unitQuantity: 4,
        wasteFactor: 0.02,
    },
    process: {
        mix: {
            method: 'intensive',
            notes: 'Add butter once gluten has been moderately developed.',
        },
        ddt: 70,
        bulkFermentationTime: 60,
        preshape: {
            time: 15,
            shape: 'ball',
        },
        finalProof: {
            time: 90,
            temp: 80,
        },
        shape: 'pan',
        bake: [
            {
                id: uuidv4(),
                time: 40,
                temp: 380,
            }
        ],
    },
    formula: {
        flours: [
            {
                id: uuidv4(),
                name: 'Bread Flour',
                ratio: 1,
            },
        ],
        ingredients: [
            {
                id: "bruh1",
                name: 'Egg',
                ratio: .6,
            },
            {
                id: "bruh2",
                name: 'Butter',
                ratio: .6,
            },
            {
                id: uuidv4(),
                name: 'Sugar',
                ratio: .2,
            },
            {
                id: uuidv4(),
                name: 'Milk',
                ratio: .1,
            },
            {
                id: uuidv4(),
                name: 'Osmotolerant Instant Yeast',
                ratio: .012
            },
        ]
    },
    preferments: [
        {
            id: "stiffy",
            name: "Stiff Levain",
            prefermentedFlourRatio: .1,
            fermentation: {
                time: 720,
                temperature: 70,
            },
            formula: {
                flours: [
                    {
                        id: "b1",
                        name: 'Bread Flour',
                        ratio: 1,
                    },
                ],
                ingredients: [
                    {
                        id: 'i1',
                        name: 'Water',
                        ratio: .65,
                    },
                    {
                        id: "i2",
                        name: 'Starter',
                        ratio: .2
                    },
                ],
            }
        }
    ]
};

describe('test recipe preferment selectors', () => {
    describe('test preferments', () => {
        it('preferments should be defined', () => {
            expect(selectPreferments(recipe, "bread3")).toBeDefined();
        });

        it('should select correct preferment ', () => {
            expect(selectPreferment(recipe, "bread3", "stiffy")).toStrictEqual(
                {
                    id: "stiffy",
                    name: "Stiff Levain",
                    prefermentedFlourRatio: .1,
                    fermentation: {
                        time: 720,
                        temperature: 70,
                    },
                    formula: {
                        flours: [
                            {
                                id: "b1",
                                name: 'Bread Flour',
                                ratio: 1,
                            },
                        ],
                        ingredients: [
                            {
                                id: 'i1',
                                name: 'Water',
                                ratio: .65,
                            },
                            {
                                id: 'i2',
                                name: 'Starter',
                                ratio: .2
                            },
                        ],
                    }
                }
            );
        });

        it('should select right preferment ratio', () => {
            expect(selectPrefermentTotalRatio(recipe, "bread3", "stiffy")).toBe(1.85)
        })

        it('should return amount of prefermented flour', () => {
            expect(selectPffWeight(recipe, "bread3", "stiffy")).toBe(195)
        })

        it('should return total preferment weight', () => {
            expect(selectPrefermentWeight(recipe, "bread3", "stiffy")).toBe(361)
        })

        it('returns totals for prefemrent', () => {
            expect(selectPrefermentTotals(recipe, "bread3", "stiffy")).toBe({
                totalRatio: 1.85,
                totalWeight: 361,
            })
        })
    });

    describe('testing other selectors', () => {
        it('select total flour weight', () => {
            //expect(selectTotalFlourWeight({editRecipe: recipe, recipes: })).toBe('1299');
        });
    });
});

