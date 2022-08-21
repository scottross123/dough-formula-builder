import NavbarItem, { NavbarItemProps } from "./NavbarItem";
import { BiRestaurant, BiFoodMenu, BiPlanet, BiFile, BiHome } from "react-icons/bi";
import {useAppSelector} from "../../store/hooks";
import {selectRecipes} from "../../store/selectors/recipesSelectors";

const Navbar = () => {
    const { id: currentRecipeId } = useAppSelector(selectRecipes)[0]; // eventually recipe currently ebing eddited will persist, for now goes to firce in array

    const navItems = [
        {
            key: "recipes",
            icon: <BiRestaurant color="#8C001D" fontSize="1.5rem" />,
            text: "Recipes",
            link: `recipes/${currentRecipeId}`,
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

    return (
        <nav className="h-screen sticky top-0 w-20 flex flex-col border-r-2 justify-evenly items-center">
            { navItems.map(({ icon, text, link}: NavbarItemProps) =>
                <NavbarItem icon={icon} text={text} link={link} />
            )}
        </nav>
    );
}

export default Navbar;