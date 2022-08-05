import Cell from './Cell';
import { Ingredient } from "../../../../../app/recipeSlice";

type TableRowProps = {
    row: Ingredient,
    type: 'flour' | 'ingredient',
}

const Row = (props: TableRowProps) => {
    const { row: { id, name, ratio } } = props;
    const tableEntry: [string, number, number] = [name, ratio, ratio]
    const types = ['name', 'metric', 'ratio']

    return (
      <tr>
          {
              tableEntry.map((content, index) => (
                  <Cell ingredientId={id} content={content} type={types[index]} />
              ))
          }
      </tr>
    );
}

export default Row;

// fix key prop warning in console

// divide into flour row and ingredient row