import Table from "../Table";
import { useAppSelector } from "../../../../store/hooks";
import { selectProcess } from "../../state/editRecipeSelectors";
import { capitalize } from "../../../../utils/capitalize";
import {BakeItem} from "../../types";

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
                    <td>{ddt}°F</td>
                </tr>
                <tr>
                    <td>Bulk Fermentation</td>
                    <td>{bulkFermentationTime} minutes</td>
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
                    <td>{capitalize(shape)}</td>
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