import { useAppSelector } from "../../../../store/hooks";
import { selectRecipe } from "../../state/editRecipeSelectors";
import brioche from "../../../../assets/images/brioche.jpeg"

const Heading = () => {
    const { title, description, image, } =
        useAppSelector(state => selectRecipe(state))!;

    return (
        <div className="card card-side">
            <figure className="h-64 w-64">
                <img src={brioche} />
            </figure>

            <div className="card-body">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Heading;