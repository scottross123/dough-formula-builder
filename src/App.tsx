import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/Layout/Layout";
import {useGetRecipesQuery} from "./features/recipe/api/recipesApi";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Layout>
        <Sidebar />
    </Layout>
  );
}

export default App;
