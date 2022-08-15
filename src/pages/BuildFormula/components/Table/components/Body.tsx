import Row from "./Row";
import { useAppSelector } from "../../../../../store/hooks";
import { selectFormula } from "../../../../../store/selectors/recipeSelectors";
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