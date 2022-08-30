import {createDraftSafeSelector, createSelector} from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect'
import { RootState } from "../../../store/store";
import {Process, Yields, Formula, Ingredient, Preferment, Recipe} from "../types";

export const selectRecipe = (state: RootState): Recipe | undefined  => state.editRecipe;
export const selectYields = (state: RootState): Yields | undefined => state.editRecipe.yields
const selectUnitWeight = (state: RootState): number | undefined => state.editRecipe.yields.unitWeight;
const selectUnitQuantity = (state: RootState): number | undefined => state.editRecipe.yields.unitQuantity;
const selectWasteFactor = (state: RootState): number | undefined => state.editRecipe.yields.wasteFactor;
export const selectProcess = (state: RootState): Process | undefined => state.editRecipe.process;
export const selectFormula = (state: RootState) => state.editRecipe.formula;
const selectIngredients = (state: RootState) => state.editRecipe.formula.ingredients;
const selectFlours = (state: RootState) => state.editRecipe.formula.flours;
export const selectPreferments = (state: RootState) => state.editRecipe.preferments;


export const selectPreferment = (state: RootState, prefermentId: string,): Preferment | undefined  =>
    state.editRecipe.preferments?.find((preferment: Preferment) => preferment!.id === prefermentId);

export const selectPrefermentTotalRatio = createSelector(
    selectPreferment,
    preferment =>
        preferment!.formula.ingredients.reduce((totalRatio: number, ingredient: Ingredient) =>
            totalRatio + ingredient.ratio, 1)
);


const selectTotalRatio = createSelector(
    selectIngredients,
        ingredients =>
        ingredients.reduce((totalRatio: number, ingredient: Ingredient) =>
            totalRatio + ingredient.ratio, 1)
);

export const selectTotalWeight = createSelector(
    selectUnitWeight,
    selectUnitQuantity,
    selectWasteFactor,
    (unitWeight, unitQuantity, wasteFactor) =>
        Math.round(unitWeight! * unitQuantity! * (1 + wasteFactor!))
);

export const selectTotals = createStructuredSelector({
    totalRatio: selectTotalRatio,
    totalWeight: selectTotalWeight,
});

export const selectTotalFlourWeight = createDraftSafeSelector(
    selectTotalWeight,
    selectTotalRatio,
    (totalWeight, totalRatio) =>
        Math.round((totalWeight / totalRatio))
);

export const selectPffWeight = createSelector(
    selectPreferment,
    selectTotalFlourWeight,
    (preferment, totalFlourWeight) =>
        (preferment!.prefermentedFlourRatio * totalFlourWeight)
);

export const selectPrefermentWeight = createSelector(
    selectPreferment,
    selectPffWeight,
    (preferment, pffWeight) =>
        preferment!.formula.ingredients.reduce((prefermentWeight: number, ingredient: Ingredient) =>
            prefermentWeight + ingredient.ratio * pffWeight, pffWeight)
);

export const selectPrefermentTotals = createStructuredSelector({
    totalRatio: selectPrefermentTotalRatio,
    totalWeight: selectPrefermentWeight,
});

/*
const selectRecipeId = (_: any, id: string) => id;

export const selectFlour = createSelector(
    selectFlours,
    selectRecipeId,
    (flours, id) =>
        flours.find((flour: Ingredient) => flour.id === id)
);

export const selectIngredient = createSelector(
    selectIngredients,
    selectRecipeId,
    (ingredients, id) =>
        ingredients.find((ingredient: Ingredient) => ingredient.id === id)
);*/
