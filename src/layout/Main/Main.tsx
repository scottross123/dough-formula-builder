import styles from './Main.module.css'
import BuildFormula from "../../pages/BuildFormula/BuildFormula";
import ViewFormula from "../../pages/ViewFormula/ViewFormula";

const Main = () => {
    return (
        <main className={styles.main}>
            <BuildFormula />

            {/*<ViewFormula />*/}
        </main>
    );
}

export default Main;