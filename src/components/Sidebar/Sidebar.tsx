import SidebarItem from "./SidebarItem";
import { useGetRecipesQuery } from "../../api/recipesApi";
import Loading from "../Loading";

const Sidebar = () => {
    const { isLoading, isError, error, data: recipes } = useGetRecipesQuery();

    if (isLoading) {
        return <Loading/>;
    }

    if (isError) {
        console.log(error);
        return <div>something went wrong</div>;
    }

    //const actions =

    return (
        <aside className="h-screen top-0 right-0 sticky overflow-y-hidden flex flex-col p-4 gap-4 border-r-2
        justify-items-center bg-base-100">
            {/*<div className="flex w-full items-center">
                <IconButton
                    size='sm'
                    color='ghost'
                    icon={<MdAdd className="text-primary" fontSize="1rem" />}
                    tooltipText="Add a new recipe!"
                    tooltipPosition='bottom'
                />
            </div> } */}

            <h1 className="text-4xl bold">Recipes</h1>
            <input type="text" placeholder="Search…" className="input input-bordered input-sm"/>

            <div className="flex flex-col ">
                { recipes?.map(({ id, title, description }) =>
                    <SidebarItem
                        key={id}
                        title={title}
                        description={description}
                        link={id}
                    />
                )}
            </div>
        </aside>
     );
}

export default Sidebar;