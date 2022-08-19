import { createSelector } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect'
import { Ingredient } from "../slices/recipesSlice";
import { RootState } from "../store";

export const selectRecipes = (state: RootState) => state.recipes;

export const selectRecipe = (state: RootState, id: string) => state.recipes.find(recipe => recipe.id === id);

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

export const selectYields = createSelector(
    selectRecipe,
    (recipe) => recipe!.yields
);

export const selectUnitWeight = createSelector(
    selectYields,
    (yields) => yields!.unitWeight
);

const selectUnitQuantity = createSelector(
    selectYields,
    (yields) => yields!.unitQuantity
);

const selectWasteFactor = createSelector(
    selectYields,
    (yields) => yields!.wasteFactor
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

const selectIngredient = createSelector(
    [
        selectIngredients,
        (ingredients, id) => id
    ],
    (ingredients, id) =>
        Object.assign({}, ...ingredients.filter((ingredient: Ingredient) => ingredient.id === id))
);

export const selectIngredientWeight = createSelector(
    selectIngredient,
    selectTotalFlourWeight,
    (ingredient, totalFlourWeight) =>
        Math.round(ingredient.ratio * totalFlourWeight)
);

export const selectFlour = createSelector(
    [
        selectFlours,
        (flours, id) => id
    ],
    (flours, id) =>
        Object.assign({}, ...flours.filter((flour: Ingredient) => flour.id === id))
);

export const selectFlourWeight = createSelector(
    selectFlour,
    selectTotalFlourWeight,
    (flour, totalFlourWeight) =>
        Math.round(flour.ratio * totalFlourWeight)
);


/*import {initialState} from "./recipeSlice";

const selection = selectFlourWeight({recipe: initialState}, '1' as never);
console.log(selection); */