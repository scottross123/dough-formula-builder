import Row from "./Row";
import { useAppSelector } from "../../../../../app/hooks";
import { selectFormula } from "../../../../../app/recipeSelectors";
import FlourRow from "./FlourRow";

const Body = () => {
    const { flours, ingredients } = useAppSelector(selectFormula);

    return (
        <tbody>
        <FlourRow />

        {
            ingredients.map((ingredient) => (
            <Row type={'ingredient'} ingredient={ingredient} />
            ))
        }
        </tbody>
    );
}

export default Body;

// fix key prop warning in console