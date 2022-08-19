import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import { v4 as uuidv4 } from 'uuid';
import { initialState } from "./initialRecipesState";
import {selectTotalFlourWeight} from "../selectors/recipesSelectors";
import {useAppSelector} from "../hooks";

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
    id: string,
    prefermentedFlourRatio: number,
    formula: Formula,
}

type Recipe = {
    id: string,
    name: string,
    description: string,
    author: string,
    yields: Yields,
    formula: Formula,
    preferments?: Preferment[],
    // eventually: soakers, instructions, proofing times, etc
}

export type RecipesState = Recipe[]

const recipesSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<{ recipeIndex: number, newIngredient: Ingredient }>) => {
            const { recipeIndex, newIngredient } = action.payload;
            state[recipeIndex].formula.ingredients.push(newIngredient);
        },
        removeIngredient: (state, action: PayloadAction<{ recipeIndex: number, id: string }>) => {
            const { recipeIndex, id } = action.payload;
            state[recipeIndex].formula.ingredients = state[recipeIndex].formula.ingredients.filter((ingredient) => ingredient.id == id);
        },
        /*updateFlourRatio: (state, action: PayloadAction<{ recipeIndex: number, id: string, newRatio: number }>) => {
            const { recipeIndex, id, newRatio } = action.payload;
            const flour = state[recipeIndex].formula.flours.find((flour: Ingredient) => (flour.id === id));
            flour!.ratio = parseFloat(newRatio.toFixed(3));
        },*/ // for now flour ratios can not be changed
        updateFlourName: (state, action: PayloadAction<{ recipeIndex: number, id: string, newName: string}>) => {
            const { recipeIndex, id, newName } = action.payload;
            const flour = state[recipeIndex].formula.flours.find((flour: Ingredient) => flour.id === id);
            flour!.name = newName;
        },
        updateIngredientRatio: (state, action: PayloadAction<{ recipeIndex: number, id: string, newRatio: number }>) => {
            const { recipeIndex, id, newRatio } = action.payload;
            const totalFlourWeight = useAppSelector(selectTotalFlourWeight);
            const ingredient = state[recipeIndex].formula.ingredients.find((ingredient: Ingredient) => ingredient.id === id);
            const unitQuantity = state[recipeIndex].yields.unitQuantity;
            const additionalUnitWeight = ((newRatio - ingredient!.ratio) * totalFlourWeight) / unitQuantity;
            ingredient!.ratio = parseFloat(newRatio.toFixed(3));
            state[recipeIndex].yields.unitWeight += Math.round(additionalUnitWeight);
        },
        updateIngredientName: (state, action: PayloadAction<{ recipeIndex: number, id: string, newName: string}>) => {
            const { recipeIndex, id, newName } = action.payload;
            const ingredient = state[recipeIndex].formula.ingredients.find((ingredient: Ingredient) => ingredient.id === id);
            ingredient!.name = newName;
        },
        addRecipe: (state, action: PayloadAction<{recipe: Recipe}>) => {
            const { recipe } = action.payload;
            state.push(recipe);
        }
        // TO-DO: separate recipes and recipe being edited in to separate states. move update ratios/names
        // reducers into local state, which then updates global recipes state once user is done editing.
    }
});

export const {
    addIngredient,
    removeIngredient,
    updateFlourName,
    updateIngredientRatio,
    updateIngredientName,
} = recipesSlice.actions;
export default recipesSlice.reducer;

