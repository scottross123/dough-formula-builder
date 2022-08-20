import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="flex">
        <Navbar />
        <Sidebar />
        <div className="flex flex-col grow">
            <Header />
            <main className="p-4 container">
                <AppRoutes />
            </main>
        </div>
    </div>
  );
}

export default App;
