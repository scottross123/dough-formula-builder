import AppRoutes from "./routes/AppRoutes";
import AppLayout from "./components/AppLayout";
import AppModals from "./components/AppModals";

const App = () => {
    return (
        <>
            <AppLayout>
                <AppRoutes />
            </AppLayout>

            <AppModals />
        </>
    );
}

export default App;
