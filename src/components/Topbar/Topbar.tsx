import { BsGithub } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import {toggleCreateRecipeModal} from "../AppModals/modalSlice";
import {useAppDispatch} from "../../store/hooks";

const Topbar = () => {
    const currentUser = "User";
    const dispatch = useAppDispatch();

    return (
        <header className="navbar border-b-2 sticky top-0 z-50 bg-base-100">
            <div className="navbar-start">
                <Link to="/">
                    <h1 className="font-bold text-red p-1">Formula App</h1>
                </Link>
                <input type="text" placeholder="Search…" className="input input-bordered input-sm w-1/2 ml-4"/>
            </div>

            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost rounded flex gap-2">
                        <MdAdd color="#8C001D" fontSize="1.5rem" />
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content shadow bg-base-100 rounded-box w-48 mt-4">
                        <li><a onClick={() => dispatch(toggleCreateRecipeModal())}>Create a new recipe!</a></li>
                        <li><a>Add a new starter!</a></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost rounded flex gap-2">
                        <FaUserCircle color="#8C001D" fontSize="1.5rem" />
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content shadow bg-base-100 rounded-box w-24 mt-4">
                        <p className="p-4">Hi, {currentUser}!</p>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost rounded flex gap-2">
                        <MdDarkMode color="#8C001D" fontSize="1.5rem" />
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content shadow bg-base-100 rounded-box w-24 mt-4">
                        <li><a>Light</a></li>
                        <li><a>Dark</a></li>
                        <li><a>Other Themes</a></li>
                        <li><a>System</a></li>
                    </ul>
                </div>

                <button className="btn btn-ghost rounded">
                    <a href="https://github.com/scottross123/dough-formula-builder"><BsGithub color="#8C001D" fontSize="1.5rem" /></a>
                </button>
            </div>
        </header>
    );
}

export default Topbar;