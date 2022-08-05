import { createSelector } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect'
import {Ingredient} from "./recipeSlice";
import {RootState} from "./store";

export const selectRecipe = (state: RootState) => state.recipe;
export const selectFormula = (state: RootState) => state.recipe.formula;
const selectFormulaIngredients = (state: RootState) => state.recipe.formula.ingredients;
const selectUnitWeight = (state: RootState) => state.recipe.yields.unitWeight;
const selectUnitQuantity = (state: RootState) => state.recipe.yields.unitQuantity;
const selectWasteFactor = (state: RootState) => state.recipe.yields.wasteFactor;
const selectFormulaFlours = (state: RootState) => state.recipe.formula.flours;

const selectTotalRatio = createSelector(
    selectFormulaIngredients, ingredients =>
        ingredients.reduce((totalRatio, ingredient) => totalRatio + ingredient.ratio, 1)
);

const selectTotalWeight = createSelector(
    selectUnitWeight,
    selectUnitQuantity,
    selectWasteFactor,
    ( unitWeight, unitQuantity, wasteFactor ) =>
        unitWeight * unitQuantity * (1 + wasteFactor)
);

export const selectTotals = createStructuredSelector({
    totalRatio: selectTotalRatio,
    totalWeight: selectTotalWeight,
});

const selectTotalFlourWeight = createSelector(
    selectTotalWeight,
    selectTotalRatio,
    (totalWeight, totalRatio) =>
        totalWeight / totalRatio
);

const selectIngredient = createSelector(
    [
        selectFormulaIngredients,
        (ingredients, id) => id
    ],
    (ingredients, id) =>
        Object.assign({}, ...ingredients.filter(ingredient => ingredient.id === id))
);

export const selectIngredientWeight = createSelector(
    selectIngredient,
    selectTotalFlourWeight,
    (ingredient, totalFlourWeight) =>
        ingredient.ratio * totalFlourWeight
);

const selectFlour = createSelector(
    [
        selectFormulaFlours,
        (flours, id) => id
    ],
    (flours, id) =>
        Object.assign({}, ...flours.filter(flour => flour.id === id))
);

export const selectFlourWeight = createSelector(
    selectFlour,
    selectTotalFlourWeight,
    (flour, totalFlourWeight) =>
        flour.ratio * totalFlourWeight
);

/*
import {initialState} from "./recipeSlice";

const selection = (selectFlourWeight({recipe: initialState}, '1' as never));
console.log(selection);*/