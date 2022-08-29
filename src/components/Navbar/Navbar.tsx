import { GiWheat, GiMasonJar, GiBread, GiBookshelf } from "react-icons/gi";
import IconButton from "../IconButton";

type NavItem = {
    key: string,
    icon: JSX.Element,
    text: string,
    link: string,
}


const Navbar = () => {
    const navItems: NavItem[] = [
        {
            key: "recipes",
            icon: <GiBread color="#8C001D" fontSize="1.5rem" />,
            text: "Recipes",
            link: `recipes`,
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
            { navItems.map(({ key, icon, text, link}: NavItem) =>
                <IconButton
                    key={key}
                    icon={icon}
                    tooltipText={text}
                    link={link}
                    size='sm'
                    color='ghost'
                />
            )}
        </nav>
    );
}

export default Navbar;