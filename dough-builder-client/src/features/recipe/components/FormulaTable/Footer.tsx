import { metricFormat, percentFormat } from "../../utils/numberFormats";
import { useAppSelector } from "../../../../store/hooks";
import {selectPrefermentTotals, selectTotals} from "../../state/editRecipeSelectors";
import {gramsToOunces} from "../../utils/weightConversions";
import {Table} from "react-daisyui";

type FooterProps = {
    prefermentId?: string,
}

const Footer = (props: FooterProps) => {
    const { prefermentId } = props;
    const { totalWeight, totalRatio } = prefermentId ?
        useAppSelector(state => selectPrefermentTotals(state, prefermentId!)) :
        useAppSelector(state => selectTotals(state))

    return (
        <Table.Footer>
            <span>Total</span>
            <span className="lowercase">{gramsToOunces(totalWeight)}</span>
            <span className="lowercase">{metricFormat(totalWeight)}</span>
            <span>{percentFormat(totalRatio)}</span>
        </Table.Footer>
    );
}

export default Footer;