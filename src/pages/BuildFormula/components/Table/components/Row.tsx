import Cell from './Cell';
import { TableEntry } from "../types";

type TableRowProps = {
    tableEntry: TableEntry
}

const Row = (props: TableRowProps) => {
    const { tableEntry } = props;

    return (
      <tr>
          {
              Object.values(tableEntry).map((content, columnIndex) => (
                  <Cell content={content} columnIndex={columnIndex} />
              ))
          }
      </tr>
    );
}

export default Row;