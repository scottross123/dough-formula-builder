import { Home, Starters, Community, Resources } from "../features";
import { RecipePage, RecipeListPage } from "../features/recipe/pages";
import { RouteObject } from "react-router-dom";
import {NotFound} from "../components";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/recipes',
        children: [
            {
                path: '',
                element: <RecipeListPage />,
            },
            {
                path: ':recipeId',
                element: <RecipePage />,
            },
        ]
    },
    {
        path: '/starters',
        element: <Starters />,
    },
    {
        path: '/community',
        element: <Community />,
    },
    {
        path: '/resources',
        element: <Resources/>,
    },
    {
        path: '*',
        element: <NotFound />,
    }
];