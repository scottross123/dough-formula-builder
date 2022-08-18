import { TableEntry } from "../types";
import { metricFormat, percentFormat } from "../../../utils/numberFormats";
import { useAppSelector } from "../../../../../store/hooks";
import { selectTotals } from "../../../../../store/selectors/recipeSelectors";

const Footer = () => {
    const { totalWeight, totalRatio } = useAppSelector(selectTotals)
    return (
        <tfoot>
            <tr>
                <td>Total</td>
                <td>{metricFormat(totalWeight)}</td>
                <td>{percentFormat(totalRatio)}</td>
            </tr>
        </tfoot>
    )
}

export default Footer;