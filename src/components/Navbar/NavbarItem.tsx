import { NavLink } from "react-router-dom";

type NavbarItemProps = {
    icon: JSX.Element,
    text: string,
    link: string,
}

const NavbarItem = (props: NavbarItemProps) => {
     const { icon, text, link } = props;

    return (
        <div className="tooltip tooltip-right z-5" data-tip={text}>
            <NavLink
                to={link}
            >
                <button className="btn btn-ghost rounded w-fit">
                    {icon}
                </button>
            </NavLink>
        </div>
    )
}

export default NavbarItem;