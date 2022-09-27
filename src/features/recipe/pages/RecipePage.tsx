import Sidebar from "../../../components/Sidebar";
import EditRecipe from "../components/EditRecipe";
import RecipeHeader from "../components/RecipeHeader";

const RecipePage = () => {
    return (
        <main className="flex px-8 w-full h-full overflow-y-auto flex-col">
            <RecipeHeader />
            <EditRecipe />
        </main>
    )
}

export default RecipePage;