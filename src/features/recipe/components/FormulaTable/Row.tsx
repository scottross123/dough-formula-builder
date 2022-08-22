import { Ingredient } from "../../state/recipesSlice";
import {useAppSelector} from "../../../../store/hooks";
import {
    selectPffWeight,
    selectTotalFlourWeight
} from "../../state/recipesSelectors";
import NameCell from "./Cell/NameCell";
import RatioCell from "./Cell/RatioCell";
import { useContext } from "react";
import { RecipeContext } from "../../providers/RecipeProvider";

type RowProps = {
    ingredient: Ingredient,
    isFlour?: boolean,
    prefermentId?: string,
}

const Row = (props: RowProps) => {
    const { ingredient: { id, name, ratio }, isFlour, prefermentId } = props;
    const recipeId: string = useContext(RecipeContext);
    const totalFlourWeight: number = prefermentId ?
        useAppSelector(state => selectPffWeight(state, recipeId, prefermentId)) :
        useAppSelector(state => selectTotalFlourWeight(state, recipeId));
    const metric: number = Math.round(ratio * totalFlourWeight);
    const columns: JSX.Element[] = [
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

export default Row;
