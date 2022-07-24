import { TableEntry } from "./types";
import TableRow from "./TableRow";

type TableBodyProps = {
    tableEntries: TableEntry[]
}

const TableBody = (props: TableBodyProps) => {
    const { tableEntries } = props;

    return (
        <tbody>
        {
            tableEntries.map((tableEntry, rowIndex) => (
                <TableRow tableEntry={tableEntry} />
            ))
        }
        </tbody>
    );
}

export default TableBody;