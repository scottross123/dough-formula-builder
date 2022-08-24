import {describe, expect, it} from "vitest";
import {useGetRecipesQuery} from "../recipesApi";
import { act, renderHook } from '@testing-library/react';
import {Recipe} from "../../state/editRecipeSlice";

describe('test get requests for recipes', () => {
    it('request is succeuss', () => {
        const data: any = renderHook(() => {
            useGetRecipesQuery();
            return data;
        })
        console.log(data);
        expect(data).toBeDefined()
    });
});