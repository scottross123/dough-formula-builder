import Cell from './Cell';
import { formulaRow } from "../../../hooks/useFormula/useFormula";
import {FormulaRow} from "../../../../../app/formulaSlice";

type TableRowProps = {
    row: FormulaRow,
}

const Row = (props: TableRowProps) => {
    const { row: { id, ingredient, metric, ratio } } = props;
    const tableEntry: [string, number, number] = [ingredient, metric, ratio]

    return (
      <tr>
          {
              tableEntry.map((content, columnIndex) => (
                  <Cell rowId={id} content={content} columnIndex={columnIndex} />
              ))
          }
      </tr>
    );
}

export default Row;

// fix key prop warning in console