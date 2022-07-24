const Inputs = () => {
    return (
        <section>
            <div>
                <label htmlFor="quantity">Quantity of Units</label>
                <input id="quantity" />
            </div>

            <div>
                <label htmlFor="weight">Unit Weight</label>
                <input id="weight" />
            </div>

            <div>
                <label htmlFor="waste">Waste Factor</label>
                <input id="waste" />
            </div>
        </section>
    );
}

export default Inputs;