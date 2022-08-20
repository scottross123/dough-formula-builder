import bread from "../../assets/images/bread.jpeg"; // placeholder image

export type SidebarItemProps = {
    key: string,
    title: string,
    description: string,
    image?: string,
    link?: string,
}

const SidebarItem = (props: SidebarItemProps) => {
    const { title, description } = props;

    return (
        <div className="text-center py-2 rounded text-red hover:bg-gray-100">
            <p className="text-sm">{title}</p>
            <p className="text-xs">{description}</p>
        </div>
    );
}
export default SidebarItem;

//<img className="h-32 w-1/2 block mx-auto rounded-full" src={bread} />