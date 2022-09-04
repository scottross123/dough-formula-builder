import {createDraftSafeSelector, createSelector} from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect'
import { RootState } from "../../../store/store";
import {Process, Yields, Formula, Ingredient, Preferment, Recipe} from "../types";
import {useAppSelector} from "../../../store/hooks";

export const selectRecipe = (state: RootState): Recipe  => state.editRecipe;
export const selectYields = (state: RootState): Yields => state.editRecipe.yields
const selectUnitWeight = (state: RootState): number | undefined => state.editRecipe.yields.unitWeight;
const selectUnitQuantity = (state: RootState): number | undefined => state.editRecipe.yields.unitQuantity;
const selectWasteFactor = (state: RootState): number | undefined => state.editRecipe.yields.wasteFactor;
export const selectProcess = (state: RootState): Process | undefined => state.editRecipe.process;
export const selectFormula = (state: RootState) => state.editRecipe.formula;
const selectIngredients = (state: RootState) => state.editRecipe.formula.ingredients;
const selectFlours = (state: RootState) => state.editRecipe.formula.flours;
export const selectPreferments = (state: RootState): Preferment[] | undefined => state.editRecipe.preferments;


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
    (unitWeight: number | undefined, unitQuantity: number | undefined, wasteFactor: number | undefined) =>
        Math.round(unitWeight! * unitQuantity! * (1 + wasteFactor!))
);

export const selectTotals = createStructuredSelector({
    totalRatio: selectTotalRatio,
    totalWeight: selectTotalWeight,
});

export const selectTotalFlourWeight = createSelector(
    selectTotalWeight,
    selectTotalRatio,
    (totalWeight: number, totalRatio: number) =>
        Math.round((totalWeight / totalRatio))
);

export const selectPffWeight = createSelector(
    selectPreferment,
    selectTotalFlourWeight,
    (preferment: Preferment | undefined, totalFlourWeight: number) =>
        (preferment!.prefermentedFlourRatio * totalFlourWeight)
);

export const selectPrefermentWeight = createSelector(
    selectPreferment,
    selectPffWeight,
    (preferment: Preferment | undefined, pffWeight: number) =>
        preferment!.formula.ingredients.reduce((prefermentWeight: number, ingredient: Ingredient) =>
            prefermentWeight + ingredient.ratio * pffWeight, pffWeight
        )
);

export const selectPrefermentTotals = createStructuredSelector({
    totalRatio: selectPrefermentTotalRatio,
    totalWeight: selectPrefermentWeight,
});

export const selectTotalPff = createSelector(
    selectPreferments,
    (preferments: Preferment[] | undefined) =>
        preferments!.reduce((pffSum: number, preferment: Preferment) =>
            pffSum + preferment.prefermentedFlourRatio, 0
        )
);

export const selectTotalNonPff = createSelector(
    selectTotalPff,
    selectTotalFlourWeight,
    (totalPff: number, totalFlourWeight: number) =>
        (1 - totalPff) * totalFlourWeight
);

export const selectPrefermentWeights = createSelector(
    selectPreferments,
    selectTotalFlourWeight,
    (preferments: Preferment[] | undefined, totalFlourWeight: number) =>
        preferments!.map((preferment: Preferment) => {
            const pffWeight: number = totalFlourWeight * preferment.prefermentedFlourRatio;
            const weightOfIngredients: number = preferment.formula.ingredients.reduce((prefermentWeight: number, ingredient: Ingredient) => {
                return prefermentWeight + ingredient.ratio * pffWeight;
            }, pffWeight);
            return {
                id: preferment.id,
                name: preferment.name,
                metric: Math.round(weightOfIngredients),
            }
        })
)

export const selectFinalDoughIngredients = createSelector(
    selectIngredients,
    selectPreferments,
    selectTotalFlourWeight,
    (ingredients: Ingredient[], preferments: Preferment[] | undefined, totalFlourWeight: number) =>
        ingredients.map((ingredient: Ingredient) => {
            const prefermentsWithIngredient = preferments!.filter((preferment: Preferment) =>
                preferment.formula.ingredients.find((prefermentIngredient: Ingredient) =>
                    prefermentIngredient.name === ingredient.name
                )
            )
            if (prefermentsWithIngredient.length === 0)
                return {
                    id: ingredient.id,
                    name: ingredient.name,
                    metric: Math.round(ingredient.ratio * totalFlourWeight),
                }
            const prefermentedIngredientWeight = prefermentsWithIngredient.reduce((weightSum: number, preferment: Preferment) => {
                const pffWeight: number = totalFlourWeight * preferment.prefermentedFlourRatio;
                console.log(pffWeight)
                return preferment.formula.ingredients.find((prefermentIngredient: Ingredient) =>
                    prefermentIngredient.name === ingredient.name
                )!.ratio * pffWeight + weightSum
            }, 0);
            const overallIngredientWeight = ingredient.ratio * totalFlourWeight;
            const finalIngredientWeight = overallIngredientWeight - prefermentedIngredientWeight;
            return {
                id: ingredient.id,
                name: ingredient.name,
                metric: Math.round(finalIngredientWeight),
            }
        })
)

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
