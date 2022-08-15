import styles from './Heading.module.css';
import {useAppSelector} from "../../../../store/hooks";
import {selectFormula, selectRecipe, selectTotalWeight} from "../../../../store/selectors/recipeSelectors";

const Heading = () => {
    const { name, description, yields: { unitQuantity, unitWeight } } = useAppSelector(selectRecipe);
    const totalWeight = useAppSelector(selectTotalWeight);

    return (

        <section className={styles.heading}>
            <div className={styles.description}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </section>
    )
}

export default Heading;