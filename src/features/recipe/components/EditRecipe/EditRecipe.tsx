import { Heading, Inputs, Table } from "../index";
import RecipeProvider from "../../providers/RecipeProvider";
import { useAppSelector } from "../../../../store/hooks";
import { selectPreferements } from "../../../../store/selectors/recipesSelectors";
import { useParams } from "react-router-dom";

const EditRecipe = () => {
    const { recipeId } = useParams();
    console.log(recipeId)
    const preferments = useAppSelector(state => selectPreferements(state, recipeId!));

    return (
        <RecipeProvider recipeId={recipeId!}>
            <section className="flex flex-col items-center gap-8 w-full">
                <Heading />
                <Inputs />
                <Table title="Overall Formula" />
                {
                    preferments &&
                    <>
                        <Table title="Preferment" />
                        <Table title="Final Dough Formula" readOnly />
                    </>
                }
            </section>
        </RecipeProvider>
    );
}

export default EditRecipe;