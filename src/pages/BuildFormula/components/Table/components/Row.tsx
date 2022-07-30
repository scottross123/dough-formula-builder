import Cell from './Cell';
import { formulaRow } from "../../../hooks/useFormula/useFormula";

type TableRowProps = {
    row: formulaRow,
}

const Row = (props: TableRowProps) => {
    const { row: { ingredient, metric, ratio } } = props;
    const tableEntry: [string, number, number] = [ingredient, metric, ratio]

    return (
      <tr>
          {
              tableEntry.map((content, columnIndex) => (
                  <Cell content={content} columnIndex={columnIndex} />
              ))
          }
      </tr>
    );
}

export default Row;