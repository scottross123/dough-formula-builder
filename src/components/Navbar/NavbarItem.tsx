export type NavbarItemProps = {
    key: string,
    icon: string,
    link: string,
}

const NavbarItem = (props: NavbarItemProps) => {
     const { icon } = props;

    return (
        <div className="">
            {icon}
        </div>
    )
}

export default NavbarItem;