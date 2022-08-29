import { NavLink } from "react-router-dom";
import {IconType} from "react-icons";
import {Button, Tooltip} from "react-daisyui";

type IconNavLinkProps = {
    icon: JSX.Element,
    tooltipText: string,
    tooltipPosition?: 'bottom' | 'left' | 'right'
    link?: string,
    handleClick?: () => void,
    isGhost?: 'btn-ghost',
    size?: 'sm' | 'md' | 'lg' | 'xl',
}

const IconButton = (props: IconNavLinkProps) => {
    const {
        icon,
        tooltipText,
        tooltipPosition,
        link,
        isGhost,
        size,
        handleClick
    } = props;

    return (
        <Tooltip className="" position={tooltipPosition} message={tooltipText}>
            { link ?
                <NavLink
                to={link}
                >
                    <Button color={"primary"} className={`btn-${isGhost} btn-${size} rounded w-fit`}>
                        {icon}
                    </Button>
                </NavLink>
            :
                <Button onClick={handleClick} color={"primary"} className={`btn-${isGhost} btn-${size} rounded w-fit`}>
                    {icon}
                </Button>
            }
        </Tooltip>
    )
}

export default IconButton;