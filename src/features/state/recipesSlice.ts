import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";
import { v4 as uuidv4 } from 'uuid';
import { initialState } from "./initialRecipesState";
import {selectTotalFlourWeight} from "./recipesSelectors";
import {useAppSelector} from "../../store/hooks";

export type Ingredient = {
    id: string,
    name: string,
    ratio: number,
}

type Yields= {
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
    fermentation: {
        time: number,
        temperature: number,
    }
    formula: Formula,
}

type Process = {
    mix: {
        method: "short" | "improved" | "intensive",
        notes?: string,
    },
    ddt: number,
    bulkFermentationTime: number,
    preshape: {
        time: number,
        shape: string,
    },
    finalProof: {
        time: number,
        temp: number,
    },
    shape: string,
    bake: Array<
        {
            id: string,
            time: number,
            temp: number
        }
    >,
}

export type Recipe = {
    id: string,
    title: string,
    description: string,
    image?: string, // for now just link to placeholder images in assests folder
    author: string,
    yields: Yields,
    process: Process,
    formula: Formula,
    preferments?: Preferment[],
    // eventually: soakers, instructions, proofing times, etc
}

export type RecipesState = Recipe[]

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<{ recipeId: string, newIngredient: Ingredient }>) => {
            const { recipeId, newIngredient } = action.payload;
            const recipe = state.find(recipe => recipe.id === recipeId);
            recipe!.formula.ingredients.push(newIngredient);
        },
        removeIngredient: (state, action: PayloadAction<{ recipeId: string, id: string }>) => {
            const { recipeId, id } = action.payload;
            const recipe = state.find(recipe => recipe.id === recipeId);
            recipe!.formula.ingredients = recipe!.formula.ingredients.filter((ingredient) => ingredient.id == id);
        },
        /*updateFlourRatio: (state, action: PayloadAction<{ recipeIndex: number, id: string, newRatio: number }>) => {
            const { recipeIndex, id, newRatio } = action.payload;
            const flour = state[recipeIndex].formula.flours.find((flour: Ingredient) => (flour.id === id));
            flour!.ratio = parseFloat(newRatio.toFixed(3));
        },*/ // for now flour ratios can not be changed
        updateFlourName: (state, action: PayloadAction<{ recipeId: string, id: string, newName: string}>) => {
            const { recipeId, id, newName } = action.payload;
            const recipe = state.find(recipe => recipe.id === recipeId);
            const flour = recipe!.formula.flours.find((flour: Ingredient) => flour.id === id);
            flour!.name = newName;
        },
        updateIngredientRatio: (state, action: PayloadAction<{ recipeId: string, id: string, newRatio: number }>) => {
            const { recipeId, id, newRatio } = action.payload;
            const totalFlourWeight = selectTotalFlourWeight({ recipes: state }, recipeId);
            const recipe = state.find(recipe => recipe.id === recipeId);
            const ingredient = recipe!.formula.ingredients.find((ingredient: Ingredient) => ingredient.id === id);
            const unitQuantity = recipe!.yields.unitQuantity;
            const additionalUnitWeight = ((newRatio - ingredient!.ratio) * totalFlourWeight) / unitQuantity;
            ingredient!.ratio = parseFloat(newRatio.toFixed(3));
            recipe!.yields.unitWeight += Math.round(additionalUnitWeight);
        },
        updateIngredientName: (state, action: PayloadAction<{ recipeId: string, id: string, newName: string}>) => {
            const { recipeId, id, newName } = action.payload;
            const recipe = state.find(recipe => recipe.id === recipeId);
            const ingredient = recipe!.formula.ingredients.find((ingredient: Ingredient) => ingredient.id === id);
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

