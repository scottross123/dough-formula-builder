import styles from './EditFormula.module.css';
import BuilderInputs from "./components/inputs/BuilderInputs";
import InputIngredients from "./components/ingredients/InputIngredients";


const EditFormula = () => {
    return (
        <section>
            <BuilderInputs />

            <InputIngredients />
        </section>
    )
}

export default EditFormula;