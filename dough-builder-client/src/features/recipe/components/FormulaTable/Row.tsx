import { Ingredient } from "../../types";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {
    selectPffWeight,
    selectTotalFlourWeight
} from "../../state/editRecipeSelectors";
import NameCell from "./Cell/NameCell";
import RatioCell from "./Cell/RatioCell";
import EditableCell from "../EditableCell";
import {percentFormat} from "../../utils/numberFormats";
import {gramsToOunces} from "../../utils/weightConversions";
import EditableRatioCell from "./EditableRatioCell";

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
            <td key="us">{gramsToOunces(metric)}</td>,
            <td key="metric">{metric}g</td>,
            isFlour ? <td key="ratio">100%</td> : <td>{ratio * 100}%</td>,
        ] : [
            /*<EditableCell
                id={id}
                key="name"
                type="text"
                dispatchType={isFlour ? 'flourName' : 'ingredientName'}
                initialValue={name}
            />,*/<td>bruh</td>,
            <td key="us">{gramsToOunces(metric)}</td>,
            <td key="metric">{metric}g</td>,
            isFlour ? <td key="ratio">100%</td> :
                <EditableRatioCell id={id} initialRatioValue={ratio} />
        ];

    return (
      <tr className="hover">
          { columns.map((column) => column ) }
      </tr>
    );
}

export default Row;
