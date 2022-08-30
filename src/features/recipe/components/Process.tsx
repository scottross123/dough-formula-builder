import Table from "./Table";
import { useAppSelector } from "../../../store/hooks";
import { selectProcess } from "../state/editRecipeSelectors";
import { capitalize } from "../../../utils/capitalize";
import {BakeItem} from "../types";
import EditableCell from "./EditableCell";

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

    return (
        <Table title="Process">
            <tbody>
                <tr>
                    <td>Mix</td>
                    <td>{capitalize(mix.method)}</td>
                </tr>
                <tr>
                    <td>DDT</td>
                    <EditableCell
                        type="number"
                        onChangeFn={() => console.log("changed")}
                        initialValue={ddt}
                        symbol={'°F'}
                    />
                </tr>
                <tr>
                    <td>Bulk Fermentation</td>
                    <EditableCell
                        type="number"
                        onChangeFn={() => console.log("changed")}
                        initialValue={bulkFermentationTime}
                        symbol=' minutes'
                    />
                </tr>
                <tr>
                    <td>Preshape</td>
                    <td>{capitalize(preshape.shape)}, rest {preshape.time} minutes.</td>
                </tr>
                <tr>
                    <td>Final Proof</td>
                    <td>{finalProof.time} minutes at {finalProof.temp}°F</td>
                </tr>
                <tr>
                    <td>Shape</td>
                    <EditableCell
                        type='text'
                        onChangeFn={() => console.log("changed")}
                        initialValue={shape}
                        formatFunction={capitalize}
                    />
                </tr>
                { bake &&
                    <tr>
                        <td>Bake</td>
                        <td>
                            {bake.map((bakeItem: BakeItem) => <p>{bakeItem.time} minutes at {bakeItem.temp}°F</p>)}
                        </td>
                    </tr>
                }
                {
                    fry &&
                    <tr>
                        <td>Fry</td>
                        <td>{fry.time} minutes at {fry.temp}°F</td>
                    </tr>
                }
            </tbody>
        </Table>
    );
}

export default Process;