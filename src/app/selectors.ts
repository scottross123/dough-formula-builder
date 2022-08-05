import { createSelector } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect'
import {Ingredient} from "./recipeSlice";
import {RootState} from "./store";

export const selectRecipe = (state: RootState) => state.recipe;
export const selectFormula = (state: RootState) => state.recipe.formula;

const selectFormulaIngredients = (state: RootState) => state.recipe.formula.ingredients;

const selectTotalRatio = createSelector(
    selectFormulaIngredients, ingredients =>
        ingredients.reduce((totalRatio, ingredient) => totalRatio + ingredient.ratio, 1)
);

const selectUnitWeight = (state: RootState) => state.recipe.yields.unitWeight;
const selectUnitQuantity = (state: RootState) => state.recipe.yields.unitQuantity;
const selectWasteFactor = (state: RootState) => state.recipe.yields.wasteFactor;

const selectTotalWeight = createSelector(
    selectUnitWeight,
    selectUnitQuantity,
    selectWasteFactor,
    ( unitWeight, unitQuantity, wasteFactor ) =>
        unitWeight * unitQuantity * (1 + wasteFactor)
)

export const selectTotals = createStructuredSelector({
    totalRatio: selectTotalRatio,
    totalWeight: selectTotalWeight,
});


import {initialState} from "./recipeSlice";

alert(selectTotalWeight({recipe: initialState}));