import Table from "../../components/table/Table";
import BuilderInputs from "../../components/inputs/BuilderInputs";
import styles from './Builder.module.css'

const Builder = () => {
    return (
        <main className={styles.main}>
            <section className={styles.main}>
                <BuilderInputs />
            </section>

            <section className={styles.main}>
                <Table />
            </section>
        </main>
    );
}

export default Builder;