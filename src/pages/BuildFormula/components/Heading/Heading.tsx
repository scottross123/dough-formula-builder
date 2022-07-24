import styles from './Heading.module.css';

const Heading = () => {
    return (
        <section className={styles.heading}>
            <div className={styles.description}>
                <h1>Sourdough Baguettes</h1>
                <p>Baguettes made with sourdough levain and fresh yeast.</p>
            </div>

            <table className={styles.vitals}>
                <tr>
                    <td className={styles.info}>Yield</td>
                    <td>3 Units</td>
                </tr>

                <tr>
                    <td>Weight</td>
                    <td>1500g</td>
                </tr>

                <tr>
                    <td>PFF</td>
                    <td>15%</td>
                </tr>
            </table>
        </section>
    )
}

export default Heading;