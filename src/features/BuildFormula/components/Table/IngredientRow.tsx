import { Ingredient } from "../../../../store/slices/recipeSlice";
import {useAppSelector} from "../../../../store/hooks";
import {selectIngredientWeight, selectFlourWeight} from "../../../../store/selectors/recipeSelectors";
import NameCell from "./Cell/NameCell";
import RatioCell from "./Cell/RatioCell";
import { Fragment } from "react";

type IngredientRowProps = {
    ingredient: Ingredient,
    isFlour?: boolean,
}

const IngredientRow = (props: IngredientRowProps) => {
    const { ingredient: { id, name, ratio }, isFlour } = props;
    const metric: number = isFlour ?
        useAppSelector((state) => selectFlourWeight(state, id as never)) :
        useAppSelector((state) => selectIngredientWeight(state, id as never))
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
