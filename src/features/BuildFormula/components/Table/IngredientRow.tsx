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

type Row = {
    key: string | number,
    cell: JSX.Element,
}

const IngredientRow = (props: IngredientRowProps) => {
    const { ingredient: { id, name, ratio }, isFlour } = props;
    const metric: number = isFlour ?
        useAppSelector((state) => selectFlourWeight(state, id as never)) :
        useAppSelector((state) => selectIngredientWeight(state, id as never))
    const rows: Row[] = [
        {
            key: name,
            cell: <NameCell ingredientId={id} name={name}/>,
        },
        {
            key: metric,
            cell: <td>{metric}g</td>,
        },
        {
            key: ratio,
            cell: isFlour ? <td>100%</td> : <RatioCell ingredientId={id} ratio={ratio} />,
        },
    ];

    return (
      <tr className="hover">
          { rows.map(({cell, key}) =>
              <Fragment key={key}>
                  {cell}
              </Fragment>
          )}
      </tr>
    );
}

export default IngredientRow;
