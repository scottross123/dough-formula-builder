import Cell from './Cell/Cell';
import {Ingredient, updateFlourRatio} from "../../../../../app/recipeSlice";
import {useAppSelector} from "../../../../../app/hooks";
import {
    selectAdditionalFlours,
    selectPrimaryFlour,
    selectPrimaryFlourRatio, selectPrimaryFlourWeight,
    selectTotalFlourWeight,
} from "../../../../../app/recipeSelectors";
import NameCell from "./Cell/NameCell";
import {Fragment, useState} from "react";
import FlourRatioCell from "./Cell/FlourRatioCell";
import FlourWeightCell from "./Cell/FlourWeightCell";
import WeightCell from "./Cell/WeightCell";
import RatioCell from "./Cell/RatioCell";

const FlourRow = () => {
    const totalFlourWeight = useAppSelector(selectTotalFlourWeight);
    const primaryFlour = useAppSelector(selectPrimaryFlour);
    const flours = useAppSelector(selectAdditionalFlours);
    const primaryFlourRatio = useAppSelector(selectPrimaryFlourRatio);
    const primaryFlourWeight = useAppSelector(selectPrimaryFlourWeight);

    return (
        <Fragment>
            <tr>
                <td>{primaryFlour}</td>
                <td>{primaryFlourWeight}g</td>
                <td>{primaryFlourRatio * 100}%</td>
            </tr>

                {
                    flours.map(({ id, name, ratio}, index) => (
                        <tr style={{ fontStyle: 'italic' }}>
                            <NameCell
                                ingredientId={id}
                                name={name}
                            />
                            <WeightCell
                                ingredientId={id}
                                ratio={ratio}
                                isFlour={true}
                            />
                            <RatioCell
                                ingredientId={id}
                                ratio={ratio}
                                isFlour={true}
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