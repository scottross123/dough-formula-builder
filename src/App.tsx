import styles from './App.module.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-5/6">
            <Header />
            <Main />
        </div>
    </div>
  );
}

export default App;
