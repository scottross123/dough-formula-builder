import { useAppSelector } from "../../../../store/hooks";
import { selectFormula, selectRecipe, selectTotalWeight } from "../../../../store/selectors/recipesSelectors";
import bread from "../../../../assets/images/bread.jpeg";
import {useContext} from "react";
import {RecipeContext} from "../../providers/RecipeProvider";

const Heading = () => {
    const recipeId = useContext(RecipeContext);
    const { name, description, yields: { unitQuantity, unitWeight } } =
        useAppSelector(state => selectRecipe(state, recipeId));
    const totalWeight = useAppSelector(state => selectTotalWeight(state, recipeId));

    return (
        <div className="card card-side border">
            <figure className="h-64 w-64">
                <img src={bread} />
            </figure>

            <div className="card-body">
                <h1 className="card-title">{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Heading;