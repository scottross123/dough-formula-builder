import styles from './ViewFormula.module.css'
import Vitals from "./components/vitals/Vitals";

const ViewFormula = () => {
    return (
        <section className={styles.main}>
            <Vitals breadName={'Sourdough Baguettes'}/>
        </section>
    );
}

export default ViewFormula;