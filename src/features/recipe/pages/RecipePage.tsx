import Sidebar from "../../../components/Sidebar";
import EditRecipe from "../components/EditRecipe/EditRecipe";

const RecipePage = () => {
    return (
        <>
            <main className="flex p-4 w-full">
                <EditRecipe />
            </main>
            <Sidebar />
        </>
    )
}

export default RecipePage;