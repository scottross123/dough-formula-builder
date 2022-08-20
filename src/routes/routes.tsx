import { Home, EditRecipe, Starters, Community, Resources } from "../features";

type route = {
    path: string,
    element: JSX.Element,
}

export const routes: route[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/recipes',
        element: <EditRecipe />,
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
];