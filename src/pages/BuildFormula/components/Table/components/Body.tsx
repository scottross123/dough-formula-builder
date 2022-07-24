import { TableEntry } from "../types";
import Row from "./Row";

type TableBodyProps = {
    tableEntries: TableEntry[]
}

const Body = (props: TableBodyProps) => {
    const { tableEntries } = props;

    return (
        <tbody>
        {
            tableEntries.map((tableEntry, rowIndex) => (
                <Row tableEntry={tableEntry} />
            ))
        }
        </tbody>
    );
}

export default Body;