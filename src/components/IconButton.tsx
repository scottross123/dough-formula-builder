import { NavLink } from "react-router-dom";
import {IconType} from "react-icons";
import {Button, Tooltip} from "react-daisyui";

type IconNavLinkProps = {
    icon: JSX.Element,
    tooltipText: string,
    tooltipPosition?: 'bottom' | 'left' | 'right'
    link?: string,
    handleClick?: () => void,
    variant?: 'outline' | 'link',
    size?: 'sm' | 'md' | 'lg' | 'xs',
    color?: "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error",
}

const IconButton = (props: IconNavLinkProps) => {
    const {
        icon,
        tooltipText,
        tooltipPosition,
        link,
        variant,
        size,
        color,
        handleClick
    } = props;

    return (
        <Tooltip className="font-" position={tooltipPosition} message={tooltipText}>
            { link ?
                <NavLink
                to={link}
                >
                    <Button
                        color={color ? color : 'primary'}
                        variant={variant}
                        size={size}
                        className="rounded w-fit"
                    >
                        {icon}
                    </Button>
                </NavLink>
            :
                <Button
                    onClick={handleClick}
                    color={color ? color : 'primary'}
                    variant={variant}
                    size={size}
                    className="rounded w-fit"
                >
                    {icon}
                </Button>
            }
        </Tooltip>
    )
}

export default IconButton;