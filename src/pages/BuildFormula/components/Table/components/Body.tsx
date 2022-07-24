import { TableEntry } from "../types";
import Row from "./Row";

type BodyProps = {
    tableEntries: TableEntry[]
}

const Body = (props: BodyProps) => {
    const { tableEntries } = props;

    return (
        <tbody>
        {
            tableEntries.map((tableEntry) => (
                <Row tableEntry={tableEntry} />
            ))
        }
        </tbody>
    );
}

export default Body;