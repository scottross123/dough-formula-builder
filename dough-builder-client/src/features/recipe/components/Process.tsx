import TableContainer from "./TableContainer";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import { selectProcess } from "../state/editRecipeSelectors";
import { capitalize } from "../../../utils/capitalize";
import {BakeItem} from "../types";
import EditableCell from "./EditableCell";
import {updateProcessBulkFermentationTime, updateProcessDdt} from "../state/editRecipeSlice";
import {Card, Table} from "react-daisyui";
import CardBody from "react-daisyui/dist/Card/CardBody";

const Process = () => {
    const {
        mix,
        ddt,
        bulkFermentationTime,
        preshape,
        finalProof,
        shape,
        bake,
        fry,
    } = useAppSelector(state => selectProcess(state))!
    const dispatch = useAppDispatch();

    return (
        <Card compact>
            <Card.Body>
                <Card.Title>Process</Card.Title>
                <Table compact>
                    <Table.Body>
                        <Table.Row>
                            <span>Mix</span>
                            <span>{capitalize(mix.method)}</span>
                        </Table.Row>
                        <Table.Row>
                            <span>DDT</span>
                            <EditableCell
                                type="number"
                                callbackFn={(newDdt: number) => dispatch(updateProcessDdt(newDdt))}
                                initialValue={ddt}
                                formatFn={(arg: string) => `${arg}°F`}
                            />
                        </Table.Row>
                        <Table.Row>
                            <span>Bulk Fermentation</span>
                            <EditableCell
                                type="number"
                                callbackFn={(newBulkFermentationTime: number) => dispatch(updateProcessBulkFermentationTime(newBulkFermentationTime))}
                                initialValue={bulkFermentationTime}
                                formatFn={(arg: string) => `${arg} minutes`}
                            />
                        </Table.Row>
                        <Table.Row>
                            <span>Preshape</span>
                            <span>{capitalize(preshape.shape)}, rest {preshape.time} minutes.</span>
                        </Table.Row>
                        <Table.Row>
                            <span>Final Proof</span>
                            <span>{finalProof.time} minutes at {finalProof.temp}°F</span>
                        </Table.Row>
                        <Table.Row>
                            <span>Shape</span>
                            <EditableCell
                                type='text'
                                callbackFn={() => console.log("changed")}
                                initialValue={shape}
                                formatFn={capitalize}
                            />
                        </Table.Row>
                        { bake &&
                            <Table.Row>
                                <span>Bake</span>
                                <span>
                                    {bake.map((bakeItem: BakeItem) => <p>{bakeItem.time} minutes at {bakeItem.temp}°F</p>)}
                                </span>
                            </Table.Row>
                        }
                        {
                            fry &&
                            <Table.Row>
                                <span>Fry</span>
                                <span>{fry.time} minutes at {fry.temp}°F</span>
                            </Table.Row>
                        }
                    </Table.Body>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default Process;