import Cell from './Cell/Cell';
import { Ingredient } from "../../../../store/slices/recipeSlice";
import {useAppSelector} from "../../../../store/hooks";
import {selectIngredientWeight} from "../../../../store/selectors/recipeSelectors";
import NameCell from "./Cell/NameCell";
import RatioCell from "./Cell/RatioCell";
import WeightCell from "./Cell/WeightCell";

type TableRowProps = {
    ingredient: Ingredient,
    type: 'flour' | 'ingredient',
}

type Entry = Ingredient & {
    metric: number;
}

const IngredientRow = (props: TableRowProps) => {
    const { ingredient: { id, name, ratio }, type } = props;
    //const metric = useAppSelector((state) => selectIngredientWeight(state, id as never));
    const entry = [
        <NameCell ingredientId={id} name={name} />,
        <WeightCell ingredientId={id} ratio={ratio} type={type} />,
        <RatioCell ingredientId={id} ratio={ratio} type={type} />,
    ];

    return (
      <tr className="hover">
          {
              entry.map((cell, index) => (
                  cell
              ))
          }
      </tr>
    );
}

export default IngredientRow;

// fix key prop warning in console

// divide into flour row and ingredient row