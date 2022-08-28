import { v4 as uuidv4 } from "uuid";
import bread from '../../../assets/images/bread.jpeg';
import brioche from '../../../assets/images/brioche.jpeg';
import sourdough from '../../../assets/images/sourdough.jpeg';
import {Recipe} from "../types";

// to normalize or not normalize? weigh benefits and cons later
// will optimize latter though

export const initialState: Recipe = {
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
};