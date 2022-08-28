import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialRecipesState";
import { selectTotalFlourWeight } from "./editRecipeSelectors";
import { Ingredient, Recipe } from "../types";

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
            state.formula.ingredients = state.formula.ingredients.filter((ingredient: Ingredient) => ingredient.id == id);
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
            const totalFlourWeight = selectTotalFlourWeight(state as never);
            console.log(totalFlourWeight);
            const ingredient = state.formula.ingredients.find((ingredient: Ingredient) => ingredient.id === id);
            const unitQuantity = state.yields.unitQuantity;
            const additionalUnitWeight = ((newRatio - ingredient!.ratio) * totalFlourWeight) / unitQuantity;
            ingredient!.ratio = parseFloat(newRatio.toFixed(3));
            state.yields.unitWeight += Math.round(additionalUnitWeight);
        },
        updateIngredientName: (state, action: PayloadAction<{ id: string, newName: string}>) => {
            const { id, newName } = action.payload;
            const ingredient = state.formula.ingredients.find((ingredient: Ingredient) => ingredient.id === id);
            ingredient!.name = newName;
        },
        setEditRecipe: (state, action: PayloadAction<Recipe>) => {
            const recipe = action.payload;
            Object.assign(state, recipe);
        }
    }
});

export const {
    addIngredient,
    removeIngredient,
    updateFlourName,
    updateIngredientRatio,
    updateIngredientName,
    setEditRecipe,
} = editRecipeSlice.actions;
export default editRecipeSlice.reducer;

