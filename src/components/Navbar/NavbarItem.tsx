export type NavbarItemProps = {
    key: string,
    icon: JSX.Element,
    text: string,
    link: string,
}

const NavbarItem = (props: NavbarItemProps) => {
     const { icon, text } = props;

    return (
        <div className="tooltip tooltip-right z-50" data-tip={text}>
            <button className="btn btn-ghost rounded-full w-fit">
                {icon}
            </button>
        </div>
    )
}

export default NavbarItem;