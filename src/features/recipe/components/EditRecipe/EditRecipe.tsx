import { Heading, Yields, FormulaTable } from "../index";
import RecipeProvider from "../../providers/RecipeProvider";
import { useAppSelector } from "../../../../store/hooks";
import { selectPreferments } from "../../state/editRecipeSelectors";
import { useParams } from "react-router-dom";
import Process from "../Process";
import { Preferment } from "../../state/editRecipeSlice";

const EditRecipe = () => {
    const { recipeId } = useParams();
    // add current recipe being edited to redux state, so it persists.
    // will do this after rtk query has been implemented and recipe data is being fetched rather than hard coded
    const preferments: Preferment[] | undefined = useAppSelector(state => selectPreferments(state, recipeId!));

    return (
        <RecipeProvider recipeId={recipeId!}>
            <section className="flex gap-8 w-full">
                <div className="w-1/2 flex flex-col gap-8">
                    <Heading />
                    <Yields />
                    <Process />
                </div>

                <div className="w-1/2">
                <FormulaTable title="Overall Formula" />
                {
                    preferments ?
                    <>
                        { preferments.map(preferment => (
                            <FormulaTable title={preferment.name} prefermentId={preferment.id} />
                        ))}
                        <FormulaTable title="Final Dough Formula" finalDough />
                    </> : <></>
                }
                </div>
            </section>
        </RecipeProvider>
    );
}

export default EditRecipe;