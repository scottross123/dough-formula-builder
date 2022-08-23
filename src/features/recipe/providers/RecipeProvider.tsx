import { createContext } from "react";
import {useAppSelector} from "../../../store/hooks";
import {selectRecipes} from "../state/recipesSelectors";

export const RecipeContext = createContext<string>("1");

type RecipeProviderProps = {
    children?: JSX.Element,
    recipeId: string,
}

export const RecipeProvider = ( props: RecipeProviderProps ) => {
    const { children, recipeId } = props;

    return (
        <RecipeContext.Provider value={recipeId}>
            {children}
        </RecipeContext.Provider>
    );
}

export default RecipeProvider;