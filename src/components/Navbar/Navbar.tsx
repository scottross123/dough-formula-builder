import NavbarItem, { NavbarItemProps } from "./NavbarItem";

const navItems: NavbarItemProps[] = [
    {
        key: "recipes",
        icon: "icon",
        link: "link",
    },
    {
        key: "starters",
        icon: "icon",
        link: "link",
    },
    {
        key: "community",
        icon: "icon",
        link: "link",
    },
    {
        key: "resources",
        icon: "icon",
        link: "link",
    },
];

const Navbar = () => {
    return (
        <div className="drawer-side w-12 flex flex-col p-4 border-r-2 justify-evenly items-center">
            { navItems.map(({key, icon, link}: NavbarItemProps) =>
                <NavbarItem key={key} icon={icon} link={link} />
            )}
        </div>
    );
}

export default Navbar;