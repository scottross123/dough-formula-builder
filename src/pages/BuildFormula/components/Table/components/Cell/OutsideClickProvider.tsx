import { Fragment } from "react";
import { useOnOutsideClick } from "../../../../hooks/useOnOutsideClick";

type OutsideClickProviderProps = {
    parentRef: any,
    handleClickOutside: () => void,
    children: JSX.Element,
}

const OutsideClickProvider  = (props: OutsideClickProviderProps) => {
    const { parentRef, handleClickOutside, children } = props;
    useOnOutsideClick(parentRef, () => handleClickOutside());

    return (
        <Fragment>
            { children }
        </Fragment>
    );
}

export default OutsideClickProvider;