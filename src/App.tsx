import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/Layout/Layout";
import {useGetRecipesQuery} from "./api/apiSlice";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Layout>
        <Sidebar />
    </Layout>
  );
}

export default App;
