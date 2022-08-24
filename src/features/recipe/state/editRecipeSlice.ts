import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../store/store";
import { v4 as uuidv4 } from 'uuid';
import { initialState } from "./initialRecipesState";
import {selectTotalFlourWeight} from "./editRecipeSelectors";
import {useAppSelector} from "../../../store/hooks";
import { Ingredient } from "../types";

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
            const totalFlourWeight = selectTotalFlourWeight(state);
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
        // TODO separate recipes and recipe being edited in to separate states. move update ratios/names reducers into local state, which then updates global recipes state once user is done editing.
    }
});

export const {
    addIngredient,
    removeIngredient,
    updateFlourName,
    updateIngredientRatio,
    updateIngredientName,
} = editRecipeSlice.actions;
export default editRecipeSlice.reducer;

