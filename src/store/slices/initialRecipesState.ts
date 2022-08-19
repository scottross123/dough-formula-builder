import { v4 as uuidv4 } from "uuid";
import { RecipesState } from "./recipesSlice";

// to normalize or not normalize? weigh benefits and cons later
// will optimize latter though

export const initialState: RecipesState = [
    {
        id: uuidv4(),
        name: 'Pain de Champagne',
        description: 'French style country boule made with bread flour.',
        author: 'Ruby the Baker',
        yields: {
            unitWeight: 1000,
            unitQuantity: 2,
            wasteFactor: 0,
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
                    id: uuidv4(),
                    name: 'Water',
                    ratio: .75,
                },
                {
                    id: uuidv4(),
                    name: 'Salt',
                    ratio: .018,
                },
                {
                    id: uuidv4(),
                    name: 'Instant Yeast',
                    ratio: .01
                },
            ]
        },
    },
    {
        id: uuidv4(),
        name: 'Sourdough Country Bread',
        description: 'A San Francisco style sourdough bread made with stiff levain and bread flour.',
        author: 'Chad',
        yields: {
            unitWeight: 950,
            unitQuantity: 3,
            wasteFactor: .02,
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
                    id: uuidv4(),
                    name: 'Water',
                    ratio: .8,
                },
                {
                    id: uuidv4(),
                    name: 'Salt',
                    ratio: .2,
                },
            ]
        },
        preferments: [
            {
                id: uuidv4(),
                prefermentedFlourRatio: .1,
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
                            id: uuidv4(),
                            name: 'Water',
                            ratio: .65,
                        },
                        {
                            id: uuidv4(),
                            name: 'Starter',
                            ratio: .2
                        },
                    ],
                }
            }
        ]
    },
    {
        id: uuidv4(),
        name: 'Rich Man\'s Brioche',
        description: 'A French bread and Viennoiserie made with a high proportion of egg and butter.',
        author: 'Osono',
        yields: {
            unitWeight: 1000,
            unitQuantity: 2,
            wasteFactor: 0,
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
                    id: uuidv4(),
                    name: 'Egg',
                    ratio: .6,
                },
                {
                    id: uuidv4(),
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
    },
];