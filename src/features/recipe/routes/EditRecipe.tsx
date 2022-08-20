import { Heading, Inputs, Table } from "../components";
import RecipeProvider from "../providers/RecipeProvider";

const EditRecipe = () => {
    return (
        <RecipeProvider recipeId={"3"}>
            <section className="flex flex-col items-center gap-8">
                <Heading />
                <Inputs />
                <Table title="Overall Formula" />
                <Table title="Preferment" />
                <Table title="Final Dough Formula" readOnly />
            </section>
        </RecipeProvider>
    );
}

export default EditRecipe;