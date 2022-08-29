import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/Layout";
import AppModals from "./components/AppModals";

const App = () => {
    return (
        <>
            <Layout>
                <AppRoutes />
            </Layout>

            <AppModals />
        </>
    );
}

export default App;
