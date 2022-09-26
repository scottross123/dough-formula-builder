import { useAppSelector } from "../../../store/hooks";
import { selectRecipe } from "../state/editRecipeSelectors";
import brioche from "../../../assets/images/brioche.jpeg"
import {Card} from "react-daisyui";

const Description = () => {
    const { description } = useAppSelector(state => selectRecipe(state))!;

    return (
        <Card>
            <Card.Body className="card-body">
                <p>{description}</p>
            </Card.Body>
        </Card>
    )
}

export default Description;