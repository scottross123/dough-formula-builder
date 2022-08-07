import Cell from './Cell/Cell';
import { Ingredient } from "../../../../../app/recipeSlice";
import {useAppSelector} from "../../../../../app/hooks";
import {selectFlours, selectIngredientWeight, selectTotalFlourWeight} from "../../../../../app/recipeSelectors";
import NameCell from "./Cell/NameCell";
import {Fragment, useState} from "react";
import FlourRatioCell from "./Cell/FlourRatioCell";
import FlourWeightCell from "./Cell/FlourWeightCell";

type Entry = Ingredient & {
    metric: number;
}

const FlourRow = () => {
    const totalFlourWeight = useAppSelector(selectTotalFlourWeight)
    const flours = useAppSelector(selectFlours);
    const [editingRatio, setEditingRatio] = useState(false);
    const [editingWeight, setEditingWeight] = useState(false);

    const updateEditingRatio = (isEditing: boolean) => {
        setEditingRatio(isEditing);
    }

    const updateEditingWeight = (isEditing: boolean) => {
        setEditingWeight(isEditing);
    }

    return (
        <Fragment>
            <tr>
                <td>Flour</td>
                <td>{ totalFlourWeight }g</td>
                <td>100%</td>
            </tr>

                {
                    flours.map(({ id, name, ratio}, index) => (
                        <tr style={{ fontStyle: 'italic' }}>
                            <NameCell
                                ingredientId={id}
                                name={name}
                            />
                            <FlourWeightCell
                                ingredientId={id}
                                ratio={ratio}
                                updateEditing={updateEditingWeight}
                                editing={editingWeight}
                            />
                            <FlourRatioCell
                                ingredientId={id}
                                ratio={ratio}
                                updateEditing={updateEditingRatio}
                                editing={editingRatio}
                            />
                        </tr>
                    ))
                }
        </Fragment>
    );
}

export default FlourRow;

// fix key prop warning in console

// divide into flour FlourRow and ingredient FlourRow