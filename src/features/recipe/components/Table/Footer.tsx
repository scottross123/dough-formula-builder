import { metricFormat, percentFormat } from "../../utils/numberFormats";
import { useAppSelector } from "../../../../store/hooks";
import { selectTotals } from "../../../../store/selectors/recipesSelectors";
import {useContext} from "react";
import {RecipeContext} from "../../providers/RecipeProvider";

const Footer = () => {
    const recipeId = useContext(RecipeContext);
    const { totalWeight, totalRatio } = useAppSelector(state => selectTotals(state, recipeId));

    return (
        <tfoot>
            <tr>
                <td>Total</td>
                <td className="lowercase">{metricFormat(totalWeight)}</td>
                <td>{percentFormat(totalRatio)}</td>
            </tr>
        </tfoot>
    )
}

export default Footer;