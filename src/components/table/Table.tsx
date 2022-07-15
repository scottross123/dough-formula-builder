import styles from './table.module.css';
import { percentFormat, metricFormat } from "../../utils/numberFormats";

type Entry = {
    ingredient: string,
    metric: number,
    percent: number,
}

const Table = () => {
    const entries: Entry[] = [
        {
            ingredient: 'Flour',
            metric: 500,
            percent: 1,
        },
        {
            ingredient: 'Water',
            metric: 375,
            percent: .75,
        },
        {
            ingredient: 'Salt',
            metric: 9,
            percent: .018,
        },
        {
            ingredient: 'Yeast',
            metric: 5,
            percent: .01,
        },
    ];

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Metric</th>
                    <th>Baker's %</th>
                </tr>
            </thead>
            <tbody>
            {
                entries.map(({ingredient, metric, percent}) => {
                    return (
                        <tr>
                            <td>{ingredient}</td>
                            <td>{metricFormat(metric)}</td>
                            <td>{percentFormat(percent)}</td>
                        </tr>
                    );
                })
            }
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>889g</td>
                    <td>177.8%</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table;