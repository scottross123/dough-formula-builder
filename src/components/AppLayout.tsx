import SideNavbar from "./SideNavbar";
import Topbar from "./Topbar";
import AppModals from "./AppModals";
import {Drawer} from "react-daisyui";
import Sidebar from "./Sidebar";
import {useState} from "react";

type LayoutProps = {
    children: JSX.Element;
}

const AppLayout = (props: LayoutProps) => {
    const { children } = props;
    const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

    const updateSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <div className="flex">
            <SideNavbar />
            <Drawer
                contentClassName="flex flex-col grow"
                sideClassName="w-64"
                side={<Sidebar />}
                open={false}
                mobile={isSidebarVisible}
            >
                {children}
            </Drawer>
        </div>
    )
}

export default AppLayout;