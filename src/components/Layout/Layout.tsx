import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar";
import NewRecipeModal from "../NewRecipeModal";

type LayoutProps = {
    children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="flex">
            <Navbar />
            <div className="flex flex-col grow">
                <Topbar />
                {children}
            </div>
            <NewRecipeModal />
        </div>
    )
}

export default Layout;