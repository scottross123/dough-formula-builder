const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Weight</th>
                    <th>Baker's %</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Flour</td>
                    <td>500g</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td>Water</td>
                    <td>375g</td>
                    <td>75%</td>
                </tr>
                <tr>
                    <td>Salt</td>
                    <td>9g</td>
                    <td>1.8%</td>
                </tr>
                <tr>
                    <td>Fresh Yeast</td>
                    <td>5g</td>
                    <td>1%</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>889g</td>
                    <td>177.8%</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table;