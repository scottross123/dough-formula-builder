import {useGetRecipesQuery} from "../api/recipesApi";
import { Recipe } from "../types";
import brioche from "../../../assets/images/brioche.jpeg"
import { MdEdit, MdOutlineIosShare, MdDeleteOutline } from "react-icons/all";
import IconNavLink from "../../../components/IconNavLink/IconNavLink";

type RecipePreview = Readonly<Pick<Recipe, 'id' | 'title' | 'author' | 'image'>>;

const RecipeListPage = () => {
    const { data: recipes } = useGetRecipesQuery();
    const placeholderImage = brioche;

    return (
        <div className="page flex-col gap-4">
            <div className="flex flex-col gap-8">
                <h1 className="prose text-5xl">Your Recipes</h1>
                <div className="flex gap-8">
                    <input type="text" placeholder="Search your recipes…" className="input input-bordered w-2/3"/>
                    <select className="select select-bordered w-1/3">
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 w-full">
                {
                    recipes?.map(({ id, title, author, image }: RecipePreview) =>
                        <div className="card card-side h-32 bg-base-200 shadow-xl">
                            <figure ><img className="h-32" src={brioche} alt="Movie" /></figure>
                            <div className="card-body flex-row gap-4">
                                <div className="flex flex-col w-1/4">
                                    <h2 className="card-title line-clamp-1">{title}</h2>
                                    <h4 className="prose prose-sm">By {author}</h4>
                                </div>

                                <div className="w-1/2 flex gap-4">
                                    <span className="badge">Badge</span>
                                    <span className="badge">Badge</span>
                                    <span className="badge">Badge</span>
                                    <span className="badge">Badge</span>
                                    <span className="badge">Badge</span>
                                    <span className="badge">Badge</span>
                                </div>
                                
                                <div className="card-actions self-center justify-end w-1/4">
                                    <IconNavLink
                                        icon={<MdEdit />}
                                        tooltipText='Edit'
                                        link={`/recipes/${id}`}
                                        size='md'
                                    />
                                    <button className="btn btn-md rounded btn-primary"><MdOutlineIosShare /></button>
                                    <button className="btn btn-md rounded btn-primary"><MdDeleteOutline /></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default RecipeListPage;