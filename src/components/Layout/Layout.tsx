import Navbar from "../Navbar/Navbar";
import Header from "../Header";

type LayoutProps = {
    children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="flex">
            <Navbar />
            <div className="flex flex-col grow">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout;