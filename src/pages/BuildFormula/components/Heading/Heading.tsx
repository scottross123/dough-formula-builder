import styles from './Heading.module.css';
import {useAppSelector} from "../../../../app/hooks";
import {selectFormula, selectRecipe, selectTotalWeight} from "../../../../app/recipeSelectors";

const Heading = () => {
    const { name, description, yields: { unitQuantity, unitWeight } } = useAppSelector(selectRecipe);
    const totalWeight = useAppSelector(selectTotalWeight);

    return (

        <section className={styles.heading}>
            <div className={styles.description}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>

            <table className={styles.vitals}>

                <tr>
                    <td className={styles.info}>Yield</td>
                    <td>{unitQuantity} units</td>
                </tr>

                <tr>
                    <td>Unit Weight</td>
                    <td>{unitWeight}g</td>
                </tr>

                <tr>
                    <td>Total Weight</td>
                    <td>{totalWeight}g</td>
                </tr>
            </table>
        </section>
    )
}

export default Heading;