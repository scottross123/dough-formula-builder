import { Ingredient } from "../../../../store/slices/recipesSlice";
import {useAppSelector} from "../../../../store/hooks";
import {
    selectIngredientWeight,
    selectFlourWeight,
    selectTotalFlourWeight
} from "../../../../store/selectors/recipesSelectors";
import NameCell from "./Cell/NameCell";
import RatioCell from "./Cell/RatioCell";
import {Fragment, useContext} from "react";
import {RecipeContext} from "../../providers/RecipeProvider";

type IngredientRowProps = {
    ingredient: Ingredient,
    isFlour?: boolean,
}

const IngredientRow = (props: IngredientRowProps) => {
    const { ingredient: { id, name, ratio }, isFlour } = props;
    const recipeId = useContext(RecipeContext);
    const totalFlourWeight = useAppSelector(state => selectTotalFlourWeight(state, recipeId));
    const metric: number = Math.round(ratio * totalFlourWeight);
    const columns = [
        <NameCell key="name" ingredientId={id} name={name}/>,
        <td key="metric">{metric}g</td>,
        isFlour ? <td key="ratio">100%</td> : <RatioCell key="ratio" ingredientId={id} ratio={ratio} />,
    ];

    return (
      <tr className="hover">
          { columns.map((column) => column ) }
      </tr>
    );
}

export default IngredientRow;
