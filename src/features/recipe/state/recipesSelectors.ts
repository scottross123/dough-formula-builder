import { createSelector } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect'
import {Formula, Ingredient, Preferment, Recipe} from "./recipesSlice";
import { RootState } from "../../../store/store";
import {Selector} from "react-redux/es/exports";

export const selectRecipes = (state: RootState): Recipe[] => state.recipes;

export const selectRecipe = (state: RootState, id: string): Recipe | undefined  => state.recipes.find(recipe => recipe!.id === id);

export const selectFormula = createSelector(
    selectRecipe,
    (recipe) => recipe!.formula
);

export const selectIngredients = createSelector(
    selectFormula,
    (formula) => formula.ingredients
);

export const selectFlours = createSelector(
    selectFormula,
    (formula) => formula.flours
);

export const selectPreferments = createSelector(
    selectRecipe,
    (recipe) => recipe!.preferments
)

export const selectPreferment = (state: RootState, recipeId: string, prefermentId: string,): Preferment | undefined  =>
    state.recipes.find(recipe => recipe!.id === recipeId)!
        .preferments?.find(preferment => preferment!.id === prefermentId)

export const selectPrefermentTotalRatio = createSelector(
    selectPreferment,
    preferment =>
        preferment!.formula.ingredients.reduce((totalRatio: number, ingredient: Ingredient) => totalRatio + ingredient.ratio, 1)
);

export const selectYields = createSelector(
    selectRecipe,
    recipe => recipe!.yields
);

export const selectProcess = createSelector(
    selectRecipe,
    recipe => recipe!.process
)

export const selectUnitWeight = createSelector(
    selectYields,
    yields => yields!.unitWeight
);

const selectUnitQuantity = createSelector(
    selectYields,
    yields => yields!.unitQuantity
);

const selectWasteFactor = createSelector(
    selectYields,
    yields => yields!.wasteFactor
);

const selectTotalRatio = createSelector(
    selectIngredients, ingredients =>
        ingredients.reduce((totalRatio: number, ingredient: Ingredient) => totalRatio + ingredient.ratio, 1)
);

export const selectTotalWeight = createSelector(
    selectUnitWeight,
    selectUnitQuantity,
    selectWasteFactor,
    ( unitWeight, unitQuantity, wasteFactor ) =>
        Math.round(unitWeight * unitQuantity * (1 + wasteFactor))
)

export const selectTotals = createStructuredSelector({
    totalRatio: selectTotalRatio,
    totalWeight: selectTotalWeight,
});

export const selectTotalFlourWeight = createSelector(
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
})

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
);
