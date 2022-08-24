import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {EndpointBuilder} from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { Recipe } from "../features/recipe/state/recipesSlice";

export const apiSlice = createApi({
    reducerPath: 'recipes',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints: (builder) => ({
        getRecipes: builder.query<Recipe[], void>({
            query: () => '/recipes'
        })
    })
})

export const { useGetRecipesQuery } = apiSlice;