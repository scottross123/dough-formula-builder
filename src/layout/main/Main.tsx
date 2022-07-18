import styles from './Main.module.css'
import EditFormula from "../../pages/editformula/EditFormula";
import ViewFormula from "../../pages/builder/ViewFormula";

const Main = () => {
    return (
        <main className={styles.main}>
            <EditFormula />

            <ViewFormula />
        </main>
    );
}

export default Main;