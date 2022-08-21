import styles from './table.module.css';
import { useContext } from "react";
import Footer from "./Footer";
import Body from "./Body";
import Controls from "./Controls";

type TableProps = {
    title: string,
    readOnly?: boolean,
}

const Table = (props: TableProps) => {
    const { title, readOnly } = props;

    return (
        <div className="card items-center gap-4 mb-4">
            <h1 className="card-title self-start font-bold">{title}</h1>
            <table className="card-body table table-compact w-full">
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Metric</th>
                        <th>Baker's %</th>
                    </tr>
                </thead>
                <Body />
                <Footer />
            </table>
            {!readOnly && <Controls />}
        </div>
    )

}

export default Table;
