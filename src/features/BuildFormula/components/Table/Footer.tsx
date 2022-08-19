import { metricFormat, percentFormat } from "../../utils/numberFormats";
import { useAppSelector } from "../../../../store/hooks";
import { selectTotals } from "../../../../store/selectors/recipesSelectors";

const Footer = () => {
    const { totalWeight, totalRatio } = useAppSelector(selectTotals)
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