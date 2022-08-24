import { v4 as uuidv4 } from "uuid";
import { RecipesState } from "./editRecipeSlice";
import bread from '../../../assets/images/bread.jpeg';
import brioche from '../../../assets/images/brioche.jpeg';
import sourdough from '../../../assets/images/sourdough.jpeg';

// to normalize or not normalize? weigh benefits and cons later
// will optimize latter though

export const initialState: RecipesState = [
    {
        id: "bread1",
        title: 'Pain de Champagne',
        description: 'French style country boule made with bread flour.',
        image: bread,
        author: 'Ruby the Baker',
        yields: {
            unitWeight: 1000,
            unitQuantity: 2,
            wasteFactor: 0,
        },
        process: {
            mix: {
                method: 'improved',
            },
            ddt: 75,
            bulkFermentationTime: 120,
            preshape: {
                time: 15,
                shape: 'ball',
            },
            finalProof: {
                time: 75,
                temp: 75,
            },
            shape: 'boule',
            bake: [
                {
                    id: uuidv4(),
                    time: 45,
                    temp: 450,
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
        id: "bread2",
        title: 'Sourdough Country Bread',
        description: 'A San Francisco style sourdough bread made with stiff levain and bread flour.',
        image: sourdough,
        author: 'Chad',
        yields: {
            unitWeight: 950,
            unitQuantity: 3,
            wasteFactor: .02,
        },
        process: {
            mix: {
                method: 'improved',
            },
            ddt: 78,
            bulkFermentationTime: 240,
            preshape: {
                time: 30,
                shape: 'ball',
            },
            finalProof: {
                time: 120,
                temp: 75,
            },
            shape: 'batard',
            bake: [
                {
                    id: uuidv4(),
                    time: 15,
                    temp: 475,
                },
                {
                    id: uuidv4(),
                    time: 30,
                    temp: 450,
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
                name: "Stiff Levain",
                prefermentedFlourRatio: .1,
                fermentation: {
                    time: 720,
                    temperature: 70,
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