import { useAppSelector } from "../../../../store/hooks";
import { selectFormula, selectRecipe, selectTotalWeight } from "../../state/recipesSelectors";
import bread from "../../../../assets/images/bread.jpeg";
import {useContext} from "react";
import {RecipeContext} from "../../providers/RecipeProvider";

const Heading = () => {
    const recipeId = useContext(RecipeContext);
    const { title, description, image, yields: { unitQuantity, unitWeight } } =
        useAppSelector(state => selectRecipe(state, recipeId));
    const totalWeight = useAppSelector(state => selectTotalWeight(state, recipeId));

    return (
        <div className="card card-side border">
            <figure className="h-64 w-64">
                <img src={image} />
            </figure>

            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Heading;