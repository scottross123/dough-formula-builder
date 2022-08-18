import bread from "../../assets/images/bread.jpeg"; // placeholder image

export type SidebarItemProps = {
    key: string,
    title: string,
    image?: string,
    link?: string,
}

const SidebarItem = (props: SidebarItemProps) => {
    const { title } = props;

    return (
        <div className="flex text-center py-2 rounded text-red hover:bg-gray-100">
            <p>{title}</p>
        </div>
    );
}
export default SidebarItem;

//<img className="h-32 w-1/2 block mx-auto rounded-full" src={bread} />