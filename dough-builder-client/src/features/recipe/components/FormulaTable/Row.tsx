import { Ingredient } from "../../types";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {
    selectPffWeight,
    selectTotalFlourWeight
} from "../../state/editRecipeSelectors";
import { gramsToOunces } from "../../utils/weightConversions";
import { Table } from "react-daisyui";
import {updateFlourName, updateIngredientName, updateIngredientRatio} from "../../state/editRecipeSlice";
import EditableCell from "../EditableCell";
import {percentFormat} from "../../utils/numberFormats";

type RowProps = {
    ingredient: Ingredient,
    isFlour?: boolean,
    prefermentId?: string,
}

const Row = (props: RowProps) => {
    const { ingredient: { id, name, ratio }, isFlour, prefermentId } = props;
    const totalFlourWeight: number = prefermentId ?
        useAppSelector(state => selectPffWeight(state, prefermentId)) :
        useAppSelector(state => selectTotalFlourWeight(state));
    const metric: number = Math.round(ratio * totalFlourWeight);
    console.log('tt', totalFlourWeight, ratio)
    const dispatch = useAppDispatch();

    const columns: JSX.Element[] =
        prefermentId ?
            [
        <EditableCell
            type='text'
            initialValue={name}
            callbackFn={
            isFlour ?
                (newName: string) => dispatch(updateFlourName({ id: id, newName: newName}))
                :
                (newName: string) => dispatch(updateIngredientName({ id: id, newName: newName}))
            }
        />,
        <span key="us">{gramsToOunces(metric)}</span>,
        <span key="metric">{metric}g</span>,
        isFlour ? <span key="ratio">100%</span> :
            <EditableCell
                type='number'
                initialValue={ratio}
                callbackFn={(newRatio: number) => dispatch(updateIngredientRatio({ id: id, newRatio: newRatio}))}
                formatFn={percentFormat}
            />
    ] : [
                <EditableCell
                    type='text'
                    initialValue={name}
                    callbackFn={
                        isFlour ?
                            (newName: string) => dispatch(updateFlourName({ id: id, newName: newName}))
                            :
                            (newName: string) => dispatch(updateIngredientName({ id: id, newName: newName}))
                    }
                />,
                <span key="us">{gramsToOunces(metric)}</span>,
                <span key="metric">{metric}g</span>,
                isFlour ? <span key="ratio">100%</span> :
                    <EditableCell
                        type='number'
                        initialValue={ratio}
                        callbackFn={(newRatio: number) => dispatch(updateIngredientRatio({ id: id, newRatio: newRatio}))}
                        formatFn={percentFormat}
                    />
            ]

    return (
      <Table.Row>
          { columns.map((column) => column ) }
      </Table.Row>
    );
}

export default Row;


