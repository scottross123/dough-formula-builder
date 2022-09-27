import { NavLink } from "react-router-dom";
import bread from "../../assets/images/bread.jpeg";

type SidebarItemProps = {
    key: string,
    title: string,
    description: string,
    image?: string,
    link: string,
}

const SidebarItem = (props: SidebarItemProps) => {
    const { title, link } = props;

    return (
        <NavLink to={'/recipes/' + link} >
            <div className="flex my-2 p-1 rounded text-primary hover:bg-gray-100">
                <p className="text-sm">{title}</p>
            </div>
        </NavLink>
    );
}
export default SidebarItem;

//<img className="h-32 w-1/2 block mx-auto rounded-full" src={bread} />