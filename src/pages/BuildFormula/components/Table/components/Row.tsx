import Cell from './Cell/Cell';
import { Ingredient } from "../../../../../app/recipeSlice";
import {useAppSelector} from "../../../../../app/hooks";
import {selectIngredientWeight} from "../../../../../app/recipeSelectors";
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

const Row = (props: TableRowProps) => {
    const { ingredient: { id, name, ratio }, type } = props;
    //const metric = useAppSelector((state) => selectIngredientWeight(state, id as never));
    const entry = [
        <NameCell ingredientId={id} name={name} type={type} />,
        <WeightCell ingredientId={id} ratio={ratio} type={type} />,
        <RatioCell ingredientId={id} ratio={ratio} type={type} />,
    ];

    return (
      <tr>
          {
              entry.map((cell, index) => (
                  cell
              ))
          }
      </tr>
    );
}

export default Row;

// fix key prop warning in console

// divide into flour row and ingredient row