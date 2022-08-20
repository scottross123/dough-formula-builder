import { Heading, Inputs, Table } from "../components";
import RecipeProvider from "../providers/RecipeProvider";
import {useAppSelector} from "../../../store/hooks";
import {selectPreferements, selectRecipe, selectRecipes} from "../../../store/selectors/recipesSelectors";

const EditRecipe = () => {
    const preferments = useAppSelector(state => selectPreferements(state, "3"))

    return (
        <RecipeProvider recipeId={"3"}>
            <section className="flex flex-col items-center gap-8">
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