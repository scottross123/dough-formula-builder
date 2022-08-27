import { NavLink } from "react-router-dom";
import {IconType} from "react-icons";

export type IconNavLinkProps = {
    icon: JSX.Element,
    tooltipText: string,
    tooltipLocation?: 'bottom' | 'left' | 'right'
    link: string,
    isGhost?: 'btn-ghost',
    size?: 'sm' | 'md' | 'lg' | 'xl',
}

const IconNavLink = (props: IconNavLinkProps) => {
    const { icon, tooltipText, tooltipLocation, link, isGhost, size } = props;

    return (
        <div className={`tooltip tooltip-${tooltipLocation} z-5"`} data-tip={tooltipText}>
            <NavLink
                to={link}
            >
                <button className={`btn ${isGhost} btn-${size} btn-primary rounded w-fit`}>
                    {icon}
                </button>
            </NavLink>
        </div>
    )
}

export default IconNavLink;