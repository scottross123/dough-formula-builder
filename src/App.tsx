import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="flex">
        <Navbar />
        <Sidebar />
        <div className="flex flex-col grow">
            <Header />
            <Main />
        </div>
    </div>
  );
}

export default App;
