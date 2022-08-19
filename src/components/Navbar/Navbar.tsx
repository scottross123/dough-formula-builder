import NavbarItem, { NavbarItemProps } from "./NavbarItem";
import { BiRestaurant, BiFoodMenu, BiPlanet, BiFile, BiHome } from "react-icons/bi";

const navItems: NavbarItemProps[] = [
    {
        key: "home",
        icon: <BiHome color="#8C001D" fontSize="1.5rem" />,
        text: "Home",
        link: "link",
    },
    {
        key: "recipes",
        icon: <BiRestaurant color="#8C001D" fontSize="1.5rem" />,
        text: "Recipes",
        link: "link",
    },
    {
        key: "starters",
        icon: <BiFoodMenu color="#8C001D" fontSize="1.5rem" />,
        text: "Starters",
        link: "link",
    },
    {
        key: "community",
        icon: <BiPlanet color="#8C001D" fontSize="1.5rem" />,
        text: "Community",
        link: "link",
    },
    {
        key: "resources",
        icon: <BiFile color="#8C001D" fontSize="1.5rem" />,
        text: "Resources",
        link: "link",
    },
];

const Navbar = () => {
    return (
        <div className="drawer-side top-0 h-screen sticky w-20 flex flex-col border-r-2 justify-evenly items-center">
            { navItems.map(({key, icon, text, link}: NavbarItemProps) =>
                <NavbarItem key={key} icon={icon} text={text} link={link} />
            )}
        </div>
    );
}

export default Navbar;