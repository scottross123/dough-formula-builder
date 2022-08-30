import { useAppSelector } from "../../../store/hooks";
import { selectYields } from "../state/editRecipeSelectors";
import TableContainer from "./TableContainer";

const Yields = () => {
    const { unitQuantity, unitWeight, wasteFactor } = useAppSelector(state => selectYields(state))!;

    return (
        <TableContainer title="Yields">
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
        </TableContainer>
    );
}

export default Yields;