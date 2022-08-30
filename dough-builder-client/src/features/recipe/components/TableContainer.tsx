type TableProps = {
    title: string,
    additionalInfo?: string,
    children: JSX.Element,
    controls?: JSX.Element,
}

const TableContainer = (props: TableProps ) => {
    const { title, children, controls, additionalInfo } = props;

    return (
        <div className="card rounded-none items-center gap-4 mb-4">
            <span className="flex justify-between w-full">
                <h1 className="card-title self-start w-full font-bold">{title}</h1>
                {additionalInfo && <span className="italic whitespace-nowrap align-text-bottom text-sm">{additionalInfo}</span>}
                {/*TODO figure out how to fix this so the text stays on the bottom*/}
            </span>
            {children}
            {controls}
        </div>
    );
}

export default TableContainer;