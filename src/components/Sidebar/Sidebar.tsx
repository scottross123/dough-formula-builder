import SidebarItem, {SidebarItemProps} from "./SidebarItem";
//import Search from "../Search";

const sidebarItems: SidebarItemProps[] = [
    {
        key: "champagne",
        title: "Pain de Champagne"
    },
    {
        key: "sourdoughCountry",
        title: "Sourdough Country Bread"
    },
    {
        key: "brioche",
        title: "Brioche"
    },
];

const Sidebar = () => {
    return (
        <div className="h-screen top-0 drawer-side sticky overflow-y-auto w-64 flex flex-col p-4 border-r-2 justify-items-center">
            <div className="flex items-center justify-center h-1/5 border-b-2">
                <h1 className="text-center font-bold text-red">Your Recipes</h1>
            </div>
            {/*<Search />*/}
            <div className="flex flex-col gap-8">
                { sidebarItems.map(({ key, title }) =>
                    <SidebarItem key={key} title={title} />
                )}
            </div>
        </div>
     );
}

export default Sidebar;