import SidebarItem from "./SidebarItem";
import { useGetRecipesQuery } from "../../features/recipe/api/recipesApi";
import Loading from "../Loading/Loading";

const Sidebar = () => {
    const { isLoading, isError, error, data: recipes } = useGetRecipesQuery();

    if (isLoading) {
        return <Loading/>;
    }

    if (isError) {
        console.log(error);
        return <div>something went wrong</div>;
    }

    return (
        <aside className="drawer-side h-screen top-0 right-0 sticky overflow-y-hidden w-1/4 flex flex-col p-4 border-l-2
        justify-items-center bg-base-100">
            <h1 className="mb-2 text-center font-bold text-red text-xl">Your Recipes</h1>
            <hr />
            <div className="flex flex-col ">
                { recipes?.map(({ id, title, description }) =>
                    <SidebarItem key={id} title={title} description={description} link={id} />
                )}
            </div>
        </aside>
     );
}

export default Sidebar;