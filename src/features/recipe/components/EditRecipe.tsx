import { Heading, Yields, FormulaTable } from "./index";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {selectPreferments, selectRecipe} from "../state/editRecipeSelectors";
import { useParams } from "react-router-dom";
import Process from "./Process";
import {Preferment, Recipe} from "../types";
import {setEditRecipe} from "../state/editRecipeSlice";
import {useGetRecipeQuery} from "../../../api/recipesApi";
import Loading from "../../../components/Loading";
import Notes from "./Notes";
import RecipeHeader from "./RecipeHeader";
import Description from "./Description";
import FinalDoughTable from "./FinalDoughTable/FinalDoughTable";
import FinalDoughBody from "./FinalDoughTable/FinalDoughBody";

const EditRecipe = () => {
    const { recipeId } = useParams();
    const { data: recipe, isLoading } = (useGetRecipeQuery(recipeId!));
    const dispatch = useAppDispatch();
    dispatch(setEditRecipe(recipe!));
    const preferments: Preferment[] | undefined = useAppSelector(state => selectPreferments(state));

    if (isLoading) return <Loading />;

    return (
            <div className="w-full">
                <section className="flex gap-8 w-full">
                    <div className="w-1/2 flex flex-col gap-8">
                        <Description />
                        <Yields />
                        <Process />
                        <Notes />
                    </div>

                    <div className="w-1/2 flex flex-col gap-8">
                    <FormulaTable title="Overall Formula" />
                    {
                        preferments ?
                            <>
                                {
                                    preferments.map(preferment =>
                                        <FormulaTable title={preferment.name} prefermentId={preferment.id} />
                                    )
                                }
                                <FinalDoughTable />
                            </> : <></>
                    }
                    </div>
                </section>
            </div>
    );
}

export default EditRecipe;
