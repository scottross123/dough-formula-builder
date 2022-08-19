import { useAppSelector } from "../../../../store/hooks";
import { selectFormula, selectRecipe, selectTotalWeight } from "../../../../store/selectors/recipesSelectors";
import bread from "../../../../assets/images/bread.jpeg";

const RecipeHeading = () => {
    const { name, description, yields: { unitQuantity, unitWeight } } = useAppSelector(selectRecipe);
    const totalWeight = useAppSelector(selectTotalWeight);

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

export default RecipeHeading;