import { metricFormat, percentFormat } from "../../utils/numberFormats";
import { useAppSelector } from "../../../../store/hooks";
import {selectPrefermentTotals, selectTotals} from "../../state/editRecipeSelectors";
import {useContext} from "react";
import {RecipeContext} from "../../providers/RecipeProvider";

type FooterProps = {
    prefermentId?: string,
}

const Footer = (props: FooterProps) => {
    const { prefermentId } = props;

    const recipeId: string = useContext(RecipeContext);
    const { totalWeight, totalRatio } = prefermentId ?
        useAppSelector(state => selectPrefermentTotals(state, prefermentId!)) :
        useAppSelector(state => selectTotals(state))

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