import { Heading, Yields, FormulaTable } from "../index";
import RecipeProvider from "../../providers/RecipeProvider";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import { selectPreferments } from "../../state/editRecipeSelectors";
import { useParams } from "react-router-dom";
import Process from "../Process";
import {Preferment, Recipe} from "../../types";
import {setEditRecipe} from "../../state/editRecipeSlice";
import {useGetRecipeQuery} from "../../api/recipesApi";
import Loading from "../../../../components/Loading/Loading";
import IconNavLink from "../../../../components/IconNavLink/IconNavLink";
import {MdDeleteOutline, MdEdit, MdOutlineIosShare} from "react-icons/all";

const EditRecipe = () => {
    const { recipeId } = useParams();
    const { data: recipe, isLoading } = (useGetRecipeQuery(recipeId!));
    const dispatch = useAppDispatch();
    dispatch(setEditRecipe(recipe!));
    const preferments: Preferment[] | undefined = useAppSelector(state => selectPreferments(state));

    if (isLoading) return <Loading />;

    return (
        <RecipeProvider recipeId={recipeId!}>
            <div className="w-full">
                <div className="w-full mb-8 pb-8 flex text-primary justify-between border-b">
                    <h1 className="text-6xl">{recipe?.title}</h1>

                    <div className="flex gap-4 items-end">
                        <button className="btn btn-sm rounded btn-primary"><MdOutlineIosShare /></button>
                        <button className="btn btn-sm rounded btn-primary"><MdDeleteOutline /></button>
                    </div>
                </div>
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
            </div>
        </RecipeProvider>
    );
}

export default EditRecipe;