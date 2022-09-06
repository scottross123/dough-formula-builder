import Row from "./Row";
import { useAppSelector } from "../../../../store/hooks";
import { selectFormula, selectPreferment } from "../../state/editRecipeSelectors";
import { Ingredient } from "../../types";
import { Table } from "react-daisyui";

type BodyProps = {
    prefermentId?: string,
}

const Body = (props: BodyProps) => {
    const { prefermentId } = props;
    const { flours, ingredients }: { flours: Ingredient[], ingredients: Ingredient[] } = prefermentId ?
            useAppSelector(state => selectPreferment(state, prefermentId))!.formula :
            useAppSelector(state => selectFormula(state));

    return (
        <Table.Body>
            {
                flours.map((flour: Ingredient) =>
                <Row
                    key={flour.id}
                    ingredient={flour}
                    prefermentId={prefermentId}
                    isFlour
                />
            )}

            {
                ingredients.map((ingredient: Ingredient) =>
                <Row
                    key={ingredient.id}
                    ingredient={ingredient}
                    prefermentId={prefermentId}
                />
            )}
        </Table.Body>
    );
}

export default Body;
