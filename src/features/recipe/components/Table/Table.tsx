type TableProps = {
    title: string,
    children: JSX.Element,
    controls?: JSX.Element,
}

const Table = (props: TableProps ) => {
    const { title, children, controls } = props;

    return (
        <div className="card items-center gap-4 mb-4">
            <h1 className="card-title self-start font-bold">{title}</h1>
            <table className="card-body table table-compact w-full">
                {children}
            </table>
            {controls}
        </div>
    );
}

export default Table;