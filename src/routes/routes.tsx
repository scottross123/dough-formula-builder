import { Home, RecipePage, Starters, Community, Resources } from "../features";

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
        element: <RecipePage />,
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