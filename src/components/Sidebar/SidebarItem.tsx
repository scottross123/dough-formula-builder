import bread from "../../assets/images/bread.jpeg"; // placeholder image

type SidebarItemProps = {
    title: string,
    image: string,
    link: string,
}

const SidebarItem = () => {
    return (
        <div className="flex text-center py-2 rounded text-red hover:bg-gray-100">
            <img className="block mx-auto rounded-full h-24" src={bread} />
            <p>Pain de Champagne</p>
        </div>
    );
}

export default SidebarItem;