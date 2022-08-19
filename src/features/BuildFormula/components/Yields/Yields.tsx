import { useAppSelector } from "../../../../store/hooks";
import { selectYields } from "../../../../store/selectors/recipeSelectors";

const Yields = () => {
    const { unitQuantity, unitWeight, wasteFactor } = useAppSelector(selectYields);

    return (
        <div>
            <table className="table table-compact w-full">
                <tbody>
                    <tr>
                        <td>Quantity of Units</td>
                        <td>{unitQuantity} units</td>
                    </tr>
                    <tr>
                        <td>Unit Weight</td>
                        <td>{unitWeight}g</td>
                    </tr>
                    <tr>
                        <td>Waste Factor</td>
                        <td>{wasteFactor * 100}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Yields;