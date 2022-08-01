import { formulaRow } from "../../../hooks/useFormula/useFormula";
import Row from "./Row";
import {FormulaRow} from "../../../../../app/formulaSlice";

type BodyProps = {
    formula: FormulaRow[]
}

const Body = (props: BodyProps) => {
    const { formula } = props;

    return (
        <tbody>
        {
            formula.map((row) => (
                <Row row={row} />
            ))
        }
        </tbody>
    );
}

export default Body;