import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Recipe } from "../types";

export const recipesApi = createApi({
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

export const { useGetRecipesQuery } = recipesApi;