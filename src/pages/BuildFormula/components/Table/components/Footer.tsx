import { TableEntry } from "../types";
import { metricFormat, percentFormat } from "../../../utils/numberFormats";


type FooterProps = {
    totalMetric: number,
    totalRatio: number,
}

const Footer = (props: FooterProps) => {
    const { totalMetric, totalRatio } = props;

    return (
        <tfoot>
            <tr>
                <td>Total</td>
                <td>{metricFormat(totalMetric)}</td>
                <td>{percentFormat(totalRatio)}</td>
            </tr>
        </tfoot>
    )
}

export default Footer;