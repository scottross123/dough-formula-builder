import Footer from "./Footer";
import Body from "./Body";
import Controls from "./Controls";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {selectPreferment} from "../../state/editRecipeSelectors";
import {Card, Table} from "react-daisyui";
import FinalDoughBody from "../FinalDoughTable/FinalDoughBody";

type FormulaTableProps = {
    title: string,
    prefermentId?: string,
}

const FormulaTable = (props: FormulaTableProps) => {
    const { title, prefermentId } = props;
    const pffRatio: number | undefined = prefermentId ? useAppSelector(state => selectPreferment(state, prefermentId))!.prefermentedFlourRatio : undefined;
    const additionalInfo: string | undefined = pffRatio ? `Pre-Fermented Flour: ${pffRatio * 100}%` : undefined;


    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {prefermentId && <p>{additionalInfo}</p>}
                <Table className="card-body table table-compact w-full">
                    <Table.Head>
                        <span>Ingredients</span>
                        <span>U.S.</span>
                        <span>Metric</span>
                        <span>Baker's %</span>
                    </Table.Head>
                    <Body prefermentId={prefermentId} />
                    <Footer prefermentId={prefermentId} />
                </Table>
                <Card.Actions>
                    <Controls />
                </Card.Actions>
            </Card.Body>
        </Card>
    );

}

export default FormulaTable;
