type ControlsProps = {
    deletable: boolean
}

const Controls = (props: ControlsProps) => {
    const { deletable } = props;

    return (
        <div>
            <button>add ingredient</button>
            { deletable ? <button>delete table</button> : <></>}
        </div>
    );
}

export default Controls;