import Navbar from "./Navbar/Navbar";
import Topbar from "./Topbar";
import AppModals from "./AppModals";

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
        </div>
    )
}

export default Layout;