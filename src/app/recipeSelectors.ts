import { createSelector } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect'
import {Ingredient} from "./recipeSlice";
import {RootState} from "./store";

export const selectRecipe = (state: RootState) => state.recipe;
export const selectFormula = (state: RootState) => state.recipe.formula;
export const selectFormulaIngredients = (state: RootState) => state.recipe.formula.ingredients;
const selectUnitWeight = (state: RootState) => state.recipe.yields.unitWeight;
const selectUnitQuantity = (state: RootState) => state.recipe.yields.unitQuantity;
const selectWasteFactor = (state: RootState) => state.recipe.yields.wasteFactor;
export const selectAdditionalFlours = (state: RootState) => state.recipe.formula.flours.additionalFlours;
export const selectPrimaryFlour = (state: RootState) => state.recipe.formula.flours.primaryFlour;

const selectTotalRatio = createSelector(
    selectFormulaIngredients, ingredients =>
        ingredients.reduce((totalRatio: number, ingredient: Ingredient) => totalRatio + ingredient.ratio, 1)
);

export const selectTotalWeight = createSelector(
    selectUnitWeight,
    selectUnitQuantity,
    selectWasteFactor,
    ( unitWeight, unitQuantity, wasteFactor ) =>
        Math.round(unitWeight * unitQuantity * (1 + wasteFactor))
);

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
        selectFormulaIngredients,
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
        selectAdditionalFlours,
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

export const selectPrimaryFlourRatio = createSelector(
    selectAdditionalFlours,
    (flours) => {
        const ratioSum = flours.reduce((ratioSum, { ratio }) => ratioSum + ratio, 0);
        console.log(ratioSum)
        if (1 - ratioSum < 0) throw new Error('ratio can not exceed 100%!');
        return 1 - ratioSum;
    }
);

export const selectPrimaryFlourWeight = createSelector(
    selectPrimaryFlourRatio,
    selectTotalFlourWeight,
    (primaryFlourRatio, totalFlourWeight) =>
        Math.round(primaryFlourRatio * totalFlourWeight)
)

/*import {initialState} from "./recipeSlice";

const selection = selectFlourWeight({recipe: initialState}, '1' as never);
console.log(selection); */