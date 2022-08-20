import NavbarItem, { NavbarItemProps } from "./NavbarItem";
import { BiRestaurant, BiFoodMenu, BiPlanet, BiFile, BiHome } from "react-icons/bi";

const navItems = [
    {
        key: "home",
        icon: <BiHome color="#8C001D" fontSize="1.5rem" />,
        text: "Home",
        link: "",
    },
    {
        key: "recipes",
        icon: <BiRestaurant color="#8C001D" fontSize="1.5rem" />,
        text: "Recipes",
        link: "recipes",
    },
    {
        key: "starters",
        icon: <BiFoodMenu color="#8C001D" fontSize="1.5rem" />,
        text: "Starters",
        link: "starters",
    },
    {
        key: "community",
        icon: <BiPlanet color="#8C001D" fontSize="1.5rem" />,
        text: "Community",
        link: "community",
    },
    {
        key: "resources",
        icon: <BiFile color="#8C001D" fontSize="1.5rem" />,
        text: "Resources",
        link: "resources",
    },
];

const Navbar = () => {
    return (
        <div className="drawer-side top-0 h-screen sticky w-20 flex flex-col border-r-2 justify-evenly items-center">
            { navItems.map(({ icon, text, link}: NavbarItemProps) =>
                <NavbarItem icon={icon} text={text} link={link} />
            )}
        </div>
    );
}

export default Navbar;