type TableControlsProps = {
    deletable: boolean
}

const TableControls = (props: TableControlsProps) => {
    const { deletable } = props;

    return (
        <div>
            <button>add ingredient</button>
            { deletable ? <button>delete table</button> : <></>}
        </div>
    );
}

export default TableControls;