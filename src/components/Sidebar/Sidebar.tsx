import SidebarItem from "./SidebarItem";
import {useAppSelector} from "../../store/hooks";
import {selectRecipes} from "../../store/selectors/recipesSelectors";

const Sidebar = () => {
    const recipes = useAppSelector(selectRecipes);

    return (
        <div className="h-screen top-0 drawer-side sticky overflow-y-auto w-64 flex flex-col p-4 border-l-2 justify-items-center">
            <div className="items-center justify-center h-24 border-b-2">
                <h1 className="mb-2 text-center font-bold text-red text-xl">Your Recipes</h1>
                <input type="text" placeholder="Search…" className="input input-bordered input-sm w-full"/>
            </div>
            <div className="flex flex-col gap-8">
                { recipes.map(({ id, name, description }) =>
                    <SidebarItem key={id} title={name} description={description} />
                )}
            </div>
        </div>
     );
}

export default Sidebar;