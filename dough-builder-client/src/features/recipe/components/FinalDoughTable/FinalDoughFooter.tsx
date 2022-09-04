import {Table} from "react-daisyui";
import {gramsToOunces} from "../../utils/weightConversions";
import {metricFormat, percentFormat} from "../../utils/numberFormats";
import {useAppSelector} from "../../../../store/hooks";
import {selectTotals} from "../../state/editRecipeSelectors";

const FinalDoughFooter = () => {
    const { totalWeight } = useAppSelector(state => selectTotals(state))

    return (
        <Table.Footer>
            <span>Total</span>
            <span className="lowercase">{gramsToOunces(totalWeight)}</span>
            <span className="lowercase">{metricFormat(totalWeight)}</span>
        </Table.Footer>
    );
}

export default FinalDoughFooter;