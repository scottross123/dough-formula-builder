import Sidebar from "../../../components/Sidebar";
import EditRecipe from "../components/EditRecipe/EditRecipe";

const RecipePage = () => {
    return (
        <div className="flex">
            <main className="page">
                <EditRecipe />
            </main>
            <Sidebar />
        </div>
    )
}

export default RecipePage;