import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import { v4 as uuidv4 } from 'uuid';

export type Ingredient = {
    id: string,
    name: string,
    ratio: number,
}

export type Yields = {
    unitWeight: number,
    unitQuantity: number,
    wasteFactor: number,
}

export type Formula = {
    flours: Ingredient[],
    ingredients: Ingredient[],
}

type Preferment = {
    prefermentedFlourRatio: number,
    formula: Formula[],
}

type RecipeState = {
    id: string,
    name: string,
    description: string,
    author: string,
    yields: Yields,
    formula: Formula,
    preferments: Preferment[],
    // eventually: soakers, instructions, proofing times, etc
}

export const initialState: RecipeState = {
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
    preferments: []
};

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addFlour: (state, action) => {
          state.formula.ingredients.push(action.payload);
        },
        removeFlour: (state, action) => {
          state.formula.ingredients.push(action.payload)
        },
        addIngredient: (state, action) => {
          state.formula.ingredients.push(action.payload);
        },
        removeIngredient: (state, action) => {
          state.formula.ingredients.push(action.payload)
        },
        updateFlourRatio: (state, action: PayloadAction<{ id: string, newRatio: number }>) => {
            const { id, newRatio } = action.payload;
            const flour = state.formula.flours.find((flour: Ingredient) => (flour.id === id));
            flour!.ratio = parseFloat(newRatio.toFixed(3));
        },
        updateFlourName: (state, action: PayloadAction<{id: string, newName: string}>) => {
            const { id, newName } = action.payload;
            const flour = state.formula.flours.find((flour: Ingredient) => flour.id === id);
            flour!.name = newName;
        },
        updateIngredientRatio: (state, action: PayloadAction<{ id: string, newRatio: number }>) => {
            const { id, newRatio } = action.payload;
            const ingredient = state.formula.ingredients.find((ingredient: Ingredient) => ingredient.id === id);
            ingredient!.ratio = parseFloat(newRatio.toFixed(3));
        },
        updateIngredientName: (state, action: PayloadAction<{id: string, newName: string}>) => {
            const { id, newName } = action.payload;
            const ingredient = state.formula.ingredients.find((ingredient: Ingredient) => ingredient.id === id);
            ingredient!.name = newName;
        },
        addToUnitWeight: (state, action: PayloadAction<{additionalWeight: number}>) => {
            const { additionalWeight } = action.payload;
            const additionalUnitWeight = additionalWeight / state.yields.unitQuantity;
            state.yields.unitWeight += Math.round(additionalUnitWeight);
        }
    }
});

export const {
    addFlour,
    removeFlour,
    addIngredient,
    removeIngredient,
    updateFlourRatio,
    updateFlourName,
    updateIngredientRatio,
    updateIngredientName,
    addToUnitWeight,
} = recipeSlice.actions;
export default recipeSlice.reducer;

