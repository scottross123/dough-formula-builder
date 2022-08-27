import { Ingredient } from "../../types";
import {useAppSelector} from "../../../../store/hooks";
import {
    selectPffWeight,
    selectTotalFlourWeight
} from "../../state/editRecipeSelectors";
import NameCell from "./Cell/NameCell";
import RatioCell from "./Cell/RatioCell";

type RowProps = {
    ingredient: Ingredient,
    isFlour?: boolean,
    prefermentId?: string,
    finalDough?: boolean,
}

const Row = (props: RowProps) => {
    const { ingredient: { id, name, ratio }, isFlour, prefermentId, finalDough } = props;
    const totalFlourWeight: number = prefermentId ?
        useAppSelector(state => selectPffWeight(state, prefermentId)) :
        useAppSelector(state => selectTotalFlourWeight(state));
    const metric: number = Math.round(ratio * totalFlourWeight);
    const columns: JSX.Element[] = !finalDough ?
        [
            <td key="name">{name}</td>,
            <td key="metric">{metric}g</td>,
            isFlour ? <td key="ratio">100%</td> : <td>{ratio * 100}%</td>,
        ] : [
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
