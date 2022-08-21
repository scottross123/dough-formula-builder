import { describe, expect, it } from "vitest";
import { initialState, updateFlourRatio } from "../../features/state/recipesSlice";
import {store} from "../store";

describe('update ingredient ratios', () => {
    it('increase ingredient ratios', () => {
        const state = store.getState().recipe;
        const testId = state.formula.ingredients[0].id;
        const expectedState = {...state }

        expect(updateFlourRatio({id: testId, newRatio: .9}))
    })
})