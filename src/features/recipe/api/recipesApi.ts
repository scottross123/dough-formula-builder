import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Recipe } from "../types";

export const recipesApi = createApi({
    reducerPath: 'recipes',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    tagTypes: ['Recipes'],
    endpoints: (builder) => ({
        getRecipes: builder.query<Recipe[], void>({
            query: () => '/recipes',
            providesTags: ['Recipes'],
        }),
        getRecipe: builder.query<Recipe, string>({
            query: (id) => `/recipes/${id}`,
            providesTags: (result, error, id) => [{ type: 'Recipes', id }]
        }),
        getRecipesTags: builder.query<string[], void>({
            query: () => '/tags'
        }),
        addRecipe: builder.mutation<Recipe, Recipe>({
            query: (body) => ({
                url: '/recipes',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Recipes'],
        })
    }),
});

export const { useGetRecipesQuery, useGetRecipeQuery, useGetRecipesTagsQuery, useAddRecipeMutation } = recipesApi;