import SidebarItem from "./SidebarItem";
import Search from "../Search/Search";

const Sidebar = () => {
    return (
        <div className="h-screen sticky left-0  w-1/5 flex flex-col p-4 border-r-2 justify-items-center">
            <div className="flex items-center justify-center h-1/5 border-b-2">
                <h1 className="text-center font-bold text-red">Your Recipes</h1>
            </div>
            {/*<Search />*/}
            <div className="flex flex-col gap-8">
                <SidebarItem />
                <SidebarItem />
                <SidebarItem />
            </div>
        </div>
     );
}

export default Sidebar;