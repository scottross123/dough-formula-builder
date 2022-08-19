import styles from './table.module.css';
import { useContext } from "react";
import Footer from "./Footer";
import Body from "./Body";
import Controls from "./Controls";

type TableProps = {
    title: string,
}

const Table = (props: TableProps) => {
    const { title } = props;

    return (
        <div className="w-1/2 flex flex-col items-center gap-2">
            <h1 className="self-start font-bold">{title}</h1>
            <table className="table table-compact w-full">
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
            <Controls />
        </div>
    )

}

export default Table;
