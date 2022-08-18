import { Heading, Inputs, Table } from "./components";

const BuildFormula = () => {
    return (
        <section className="flex flex-col items-center gap-8">
            <Heading />
            <Inputs />
            <Table title="Overall Formula" />
        </section>
    )
}

export default BuildFormula;