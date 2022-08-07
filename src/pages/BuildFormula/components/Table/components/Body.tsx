import Row from "./Row";
import { useAppSelector } from "../../../../../app/hooks";
import { selectFormula } from "../../../../../app/recipeSelectors";

const Body = () => {
    const { flours, ingredients } = useAppSelector(selectFormula);

    return (
        <tbody>
        {
            flours.map((flour) => (
                <Row type={'flour'} ingredient={flour}/>
            ))
        }

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