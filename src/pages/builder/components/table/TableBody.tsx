import {metricFormat, percentFormat} from "../../../../utils/numberFormats";
import {TableEntry} from "./types";

type TableBodyProps = {
    tableEntries: TableEntry[]
}

const TableBody = (props: TableBodyProps) => {
    const { tableEntries } = props;

    return (
        <tbody>
        {
            tableEntries.map(({ingredient, metric, percent}) => {
                return (
                    <tr>
                        <td>{ingredient}</td>
                        <td>{metricFormat(metric)}</td>
                        <td>{percentFormat(percent)}</td>
                    </tr>
                );
            })
        }
        </tbody>
    );
}

export default TableBody;