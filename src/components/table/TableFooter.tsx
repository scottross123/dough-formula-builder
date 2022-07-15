import { TableEntry } from "./types";
import {metricFormat, percentFormat} from "../../utils/numberFormats";


type TableFooterProps = {
    tableEntries: TableEntry[]
}

const TableFooter = (props: TableFooterProps) => {
    const { tableEntries } = props;
    const { ingredient, metric, percent } = tableEntries.reduce<TableEntry>(
        ({metric: prevMetric, percent: prevPercent},
         {metric: currMetric, percent: currPercent}) =>
        ({
            ingredient: 'Total',
            metric: prevMetric + currMetric,
            percent: prevPercent + currPercent
        }),
        {
            ingredient: 'Total',
            metric: 0,
            percent: 0,
        }
    );

    return (
        <tfoot>
            <tr>
                <td>{ingredient}</td>
                <td>{metricFormat(metric)}</td>
                <td>{percentFormat(percent)}</td>
            </tr>
        </tfoot>
    )
}

export default TableFooter;