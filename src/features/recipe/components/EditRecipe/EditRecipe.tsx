import { Heading, Inputs, Table } from "../index";
import RecipeProvider from "../../providers/RecipeProvider";
import { useAppSelector } from "../../../../store/hooks";
import { selectPreferements } from "../../../../store/selectors/recipesSelectors";
import { useParams } from "react-router-dom";

const EditRecipe = () => {
    const { recipeId } = useParams();
    const preferments = useAppSelector(state => selectPreferements(state, recipeId!));

    return (
        <RecipeProvider recipeId={recipeId!}>
            <section className="flex gap-8 w-full">
                <div className="w-1/2 flex flex-col gap-8">
                    <Heading />
                    <Inputs />

                </div>

                <div className="w-1/2">
                <Table title="Overall Formula" />
                {
                    preferments &&
                    <>
                        <Table title="Preferment" />
                        <Table title="Final Dough Formula" readOnly />
                    </>
                }
                </div>
            </section>
        </RecipeProvider>
    );
}

export default EditRecipe;