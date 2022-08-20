import SidebarItem, {SidebarItemProps} from "./SidebarItem";
import {useAppSelector} from "../../store/hooks";
import {selectRecipes} from "../../store/selectors/recipesSelectors";
//import Search from "../Search";

const Sidebar = () => {
    const recipes = useAppSelector(selectRecipes)

    return (
        <div className="h-screen top-0 drawer-side sticky overflow-y-auto w-64 flex flex-col p-4 border-r-2 justify-items-center">
            <div className="flex items-center justify-center h-1/5 border-b-2">
                <h1 className="text-center font-bold text-red">Your Recipes</h1>
            </div>
            {/*<Search />*/}
            <div className="flex flex-col gap-8">
                { recipes.map(({ id, name, description }) =>
                    <SidebarItem key={id} title={name} description={description} />
                )}
            </div>
        </div>
     );
}

export default Sidebar;