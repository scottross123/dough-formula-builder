import { formulaRow } from "../../../hooks/useFormula/useFormula";
import Row from "./Row";
import { Formula } from "../../../../../app/recipeSlice";
import {useAppSelector} from "../../../../../app/hooks";
import {selectFormula} from "../../../../../app/selectors";

const Body = () => {
    const { flours, ingredients } = useAppSelector(selectFormula)

    return (
        <tbody>
        {
            flours.map((row) => (
                <Row type={'flour'} row={row}/>
            ))
        }

        {
            ingredients.map((row) => (
            <Row type={'ingredient'} row={row} />
            ))
        }
        </tbody>
    );
}

export default Body;

// fix key prop warning in console