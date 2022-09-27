import { GiWheat, GiMasonJar, GiBread, GiBookshelf } from "react-icons/gi";
import IconButton from "./IconButton";
import { Navbar } from "react-daisyui";


type NavItem = {
    key: string,
    icon: JSX.Element,
    text: string,
    link: string,
}

const SideNavbar = () => {
    const navbarSectionClass: string = "flex flex-col gap-16";

    const navItems: NavItem[] = [
        {
            key: "recipes",
            icon: <GiBread className="text-primary" fontSize="1rem" />,
            text: "Recipes",
            link: `recipes`,
        },
        {
            key: "starters",
            icon: <GiMasonJar className="text-primary" fontSize="1rem" />,
            text: "Starters",
            link: "starters",
        },
        {
            key: "community",
            icon: <GiWheat className="text-primary" fontSize="1rem" />,
            text: "Community",
            link: "community",
        },
        {
            key: "resources",
            icon: <GiBookshelf className="text-primary" fontSize="1rem" />,
            text: "Resources",
            link: "resources",
        },
    ];

    return (
        <Navbar className="flex flex-col h-screen sticky top-0 w-10 border-r-2 bg-base-100 z-50">
            <Navbar.Start className={navbarSectionClass}>
                { navItems.map(({ key, icon, text, link}: NavItem) =>
                    <IconButton
                        key={key}
                        icon={icon}
                        tooltipText={text}
                        tooltipPosition='right'
                        link={link}
                        size='sm'
                        color='ghost'
                    />
                )}
            </Navbar.Start>

            <Navbar.End className={navbarSectionClass}>

            </Navbar.End>
        </Navbar>
    );
}

export default SideNavbar;