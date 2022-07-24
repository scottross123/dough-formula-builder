import styles from './Vitals.module.css';

type VitalsProps = {
    breadName: string
}

const Vitals = (props: VitalsProps) => {
    const { breadName } = props;

    return (
        <header className={styles.vitals}>

            <h1>{ breadName }</h1>

            <table>
                <tr>
                    <td>Yield</td>
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
        </header>
    );
}

export default Vitals;