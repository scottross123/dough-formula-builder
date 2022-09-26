import {Card, Table} from "react-daisyui";
import FinalDoughBody from "./FinalDoughBody";
import FinalDoughFooter from "./FinalDoughFooter";

const FinalDoughTable = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Final Dough Formula</Card.Title>
                <Table className="card-body table table-compact w-full">
                    <Table.Head>
                        <span>Ingredients</span>
                        <span>U.S.</span>
                        <span>Metric</span>
                    </Table.Head>
                    <FinalDoughBody />
                    <FinalDoughFooter />
                </Table>
            </Card.Body>
        </Card>
    );
}

export default FinalDoughTable;