import { ReadOnlyCell, EditCell } from './Cell';
import { TableEntry } from "./types";
import { useState } from "react";

type TableRowProps = {
    tableEntry: TableEntry
}

const TableRow = (props: TableRowProps) => {
    const { tableEntry } = props;

    return (
      <tr>
          {
              Object.values(tableEntry).map((content, index) => (
                  <ReadOnlyCell content={content} />
              ))
          }
      </tr>
    );
}

export default TableRow;