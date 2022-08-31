import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import { selectYields } from "../state/editRecipeSelectors";
import {Card, Table} from "react-daisyui";
import EditableCell from "./EditableCell";
import {updateUnitQuantity, updateUnitWeight, updateWasteFactor} from "../state/editRecipeSlice";

const Yields = () => {
    const { unitQuantity, unitWeight, wasteFactor } = useAppSelector(state => selectYields(state))!;
    const dispatch = useAppDispatch();

    return (
        <Card>
            <Card.Body>
                <Card.Title>Yield</Card.Title>
                <Table compact>
                    <Table.Body>
                        <Table.Row>
                            <span>Quantity of Units</span>
                            <EditableCell
                                type="number"
                                callbackFn={(newUnitQuantity: number) => dispatch(updateUnitQuantity(newUnitQuantity))}
                                initialValue={unitQuantity}
                                formatFn={(arg: string) => `${arg} units`}
                            />
                        </Table.Row>
                        <Table.Row>
                            <span>Unit Weight</span>
                            <EditableCell
                                type="number"
                                callbackFn={(newUnitWeight: number) => dispatch(updateUnitWeight(newUnitWeight))}
                                initialValue={unitWeight}
                                formatFn={(arg: string) => `${arg}g`}
                            />
                        </Table.Row>
                        <Table.Row>
                            <span>Waste Factor</span>
                            <EditableCell
                                type="number"
                                callbackFn={(newWasteFactor: number) => dispatch(updateWasteFactor(newWasteFactor))}
                                initialValue={wasteFactor}
                                formatFn={(arg: number) => `${arg * 100}%`}
                            />
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default Yields;