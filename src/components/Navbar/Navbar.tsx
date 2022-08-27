import NavbarItem, { NavbarItemProps } from "./NavbarItem";
import { GiWheat, GiMasonJar, GiBread, GiBookshelf } from "react-icons/gi";

const Navbar = () => {
    const navItems = [
        {
            key: "recipes",
            icon: <GiBread color="#8C001D" fontSize="1.5rem" />,
            text: "Recipes",
            link: `recipes`, //${currentRecipeId}
        },
        {
            key: "starters",
            icon: <GiMasonJar color="#8C001D" fontSize="1.5rem" />,
            text: "Starters",
            link: "starters",
        },
        {
            key: "community",
            icon: <GiWheat color="#8C001D" fontSize="1.5rem" />,
            text: "Community",
            link: "community",
        },
        {
            key: "resources",
            icon: <GiBookshelf color="#8C001D" fontSize="1.5rem" />,
            text: "Resources",
            link: "resources",
        },
    ];

    return (
        <nav className="h-screen sticky top-0 w-20 flex flex-col border-r-2 justify-evenly items-center bg-base-100 z-50">
            { navItems.map(({ icon, text, link}: NavbarItemProps) =>
                <NavbarItem icon={icon} text={text} link={link} />
            )}
        </nav>
    );
}

export default Navbar;