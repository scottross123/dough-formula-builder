import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialRecipesState";
import { selectTotalFlourWeight } from "./editRecipeSelectors";
import {Ingredient, Preferment, Recipe} from "../types";
import newRecipes from "../../community/components/NewRecipes";

const editRecipeSlice = createSlice({
    name: 'editRecipe',
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<Ingredient>) => {
            const newIngredient = action.payload;
            state.formula.ingredients.push(newIngredient);
        },
        removeIngredient: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.formula.ingredients = state.formula.ingredients.filter((ingredient: Ingredient) => ingredient.id === id);
            if (state.preferments)
                state.preferments.map((preferment: Preferment) =>
                    preferment.formula.ingredients.filter((ingredient: Ingredient) => ingredient.id === id)
                );
        },
        addPreferment: (state, action: PayloadAction<Preferment>) => {
          const newPreferment = action.payload;
          state.preferments?.push(newPreferment);
        },
        removePreferment: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.preferments = state.preferments!.filter((preferment: Preferment) => preferment.id === id);
        },
        addPrefermentIngredient: (state, action: PayloadAction<{ id: string, newIngredient: Ingredient}>) => {
            const { id, newIngredient } = action.payload;
            state.preferments!.find((preferment: Preferment) => preferment.id === id)
                ?.formula.ingredients.push(newIngredient);
            if (state.formula.ingredients.filter((ingredient: Ingredient) => ingredient.id === id))
                state.formula.ingredients.push(newIngredient);
        },
        removePrefermentIngredient: (state, action: PayloadAction<{ prefermentId: string, ingredientId: string}>) => {
            const { prefermentId, ingredientId } = action.payload;
            const preferment = state.preferments!.find((preferment: Preferment) => preferment.id === prefermentId);
            preferment!.formula.ingredients = preferment!.formula.ingredients.filter((ingredient: Ingredient) => ingredient.id === ingredientId);
        },
        /*updateFlourRatio: (state, action: PayloadAction<{ recipeIndex: number, id: string, newRatio: number }>) => {
            const { recipeIndex, id, newRatio } = action.payload;
            const flour = state[recipeIndex].formula.flours.find((flour: Ingredient) => (flour.id === id));
            flour!.ratio = parseFloat(newRatio.toFixed(3));
        },*/ // for now flour ratios can not be changed
        updateFlourName: (state, action: PayloadAction<{ id: string, newName: string}>) => {
            const { id, newName } = action.payload;
            const flour = state.formula.flours.find((flour: Ingredient) => flour.id === id);
            flour!.name = newName;
        },
        updateIngredientRatio: (state, action: PayloadAction<{ id: string, newRatio: number }>) => {
            const { id, newRatio } = action.payload;
            const totalRatio = state.formula.ingredients.reduce((totalRatio: number, ingredient: Ingredient) => totalRatio + ingredient.ratio, 1)
            const totalFlourWeight = (state.yields.unitWeight * state.yields.unitQuantity * state.yields.wasteFactor) / totalRatio;
            const ingredient = state.formula.ingredients.find((ingredient: Ingredient) => ingredient.id === id);
            const unitQuantity = state.yields.unitQuantity;
            const additionalUnitWeight = ((newRatio - ingredient!.ratio) * totalFlourWeight) / unitQuantity;
            ingredient!.ratio = newRatio;
            state.yields.unitWeight += Math.round(additionalUnitWeight);
        },
        updateIngredientName: (state, action: PayloadAction<{ id: string, newName: string}>) => {
            const { id, newName } = action.payload;
            const ingredient = state.formula.ingredients.find((ingredient: Ingredient) => ingredient.id === id);
            ingredient!.name = newName;
        },
        updatePrefermentFlourName: (state, action: PayloadAction<{ prefermentId: string, ingredientId: string, newName: string }>) => {
            const { prefermentId, ingredientId, newName } = action.payload;
            const preferment = state.preferments!.find((preferment: Preferment) => preferment.id === prefermentId);
            const flour = preferment!.formula.flours.find((flour: Ingredient) => flour.id === ingredientId);
            flour!.name = newName;
        },
        updatePrefermentIngredientRatio: (state, action: PayloadAction<{ prefermentId: string, ingredientId: string, newRatio: number }>) => {
            const { prefermentId, ingredientId, newRatio } = action.payload;
            const preferment = state.preferments!.find((preferment: Preferment) => preferment.id === prefermentId);
            const ingredient = preferment!.formula.ingredients.find((ingredient: Ingredient) => ingredient.id === ingredientId);
            ingredient!.ratio = newRatio;
            // TODO add check to prevent user from adding more ingredient to preferment than available in overall formula.
        },
        updatePrefermentIngredientName: (state, action: PayloadAction<{ prefermentId: string, ingredientId: string, newName: string }>) => {
            const { prefermentId, ingredientId, newName } = action.payload;
            const preferment = state.preferments!.find((preferment: Preferment) => preferment.id === prefermentId);
            const ingredient = preferment!.formula.ingredients.find((ingredient: Ingredient) => ingredient.id === ingredientId);
            ingredient!.name = newName;
        },
        updateUnitQuantity: (state, action: PayloadAction<number>) => {
            const newUnitQuantity = action.payload;
            state.yields.unitQuantity = newUnitQuantity;
        },
        updateUnitWeight: (state, action: PayloadAction<number>) => {
            const newUnitWeight = action.payload;
            state.yields.unitWeight = newUnitWeight;
        },
        updateWasteFactor: (state, action: PayloadAction<number>) => {
            const newWasteFactor = action.payload;
            state.yields.wasteFactor = newWasteFactor;
        },
        updateProcessMix: (state, action: PayloadAction<{ method: 'short' | 'improved' | 'intensive', notes: string }>) => {
            const newMix = action.payload;
            state.process.mix = newMix;
        },
        updateProcessDdt: (state, action: PayloadAction<number>) => {
            const newDdt = action.payload;
            state.process.ddt = newDdt;
        },
        updateProcessBulkFermentationTime: (state, action: PayloadAction<number>) => {
            const newBulkFermentationTime = action.payload;
            state.process.bulkFermentationTime = newBulkFermentationTime;
        },
        updateProcessPreshape: (state, action: PayloadAction<{ time: number, shape: string }>) => {
            const newPreShape = action.payload;
            state.process.preshape = newPreShape;
        },
        updateProcessFinalProof: (state, action: PayloadAction<{ time: number, temp: number }>) => {
            const newFinalProof = action.payload;
            state.process.finalProof = newFinalProof;
        },
        updateProcessShape: (state, action: PayloadAction<string>) => {
            const newShape = action.payload;
            state.process.shape = newShape;
        },
        updateProcessBake: (state, action: PayloadAction<{ id: string, time: number, temp: number }[]>) => {
            const newBake = action.payload;
            state.process.bake = newBake;
        },
        updateProcessFry: (state, action: PayloadAction<{ time: number, temp: number }>) => {
            const newFry = action.payload;
            state.process.fry = newFry;
        },
        setEditRecipe: (state, action: PayloadAction<Recipe | undefined>) => {
            const recipe = action.payload;
            return recipe;
        }
    }
});

export const {
    addIngredient,
    removeIngredient,
    updateFlourName,
    updateIngredientRatio,
    updateIngredientName,
    updateUnitQuantity,
    updateUnitWeight,
    updateWasteFactor,
    updateProcessBulkFermentationTime,
    updateProcessFinalProof,
    updateProcessDdt,
    updateProcessFry,
    updateProcessBake,
    updateProcessShape,
    updateProcessPreshape,
    updateProcessMix,
    setEditRecipe,
} = editRecipeSlice.actions;
export default editRecipeSlice.reducer;

