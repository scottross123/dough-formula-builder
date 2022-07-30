import {formulaRow} from "../../../hooks/useFormula/useFormula";
import Row from "./Row";

type BodyProps = {
    formula: formulaRow[]
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