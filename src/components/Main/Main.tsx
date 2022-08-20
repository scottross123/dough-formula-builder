import styles from './Main.module.css'
import EditRecipe from "../../features/recipe";
import AppRoutes from "../../routes/AppRoutes";

const Main = () => {
    return (
        <main className="p-4 container">
            <AppRoutes />
        </main>
    );
}

export default Main;