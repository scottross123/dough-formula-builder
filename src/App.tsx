import styles from './App.module.css';
import { Fragment } from "react";
import ViewFormula from "./pages/builder/ViewFormula";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import Sidenav from "./layout/sidenav/Sidenav";

const App = () => {
  return (
    <div className={styles.app}>
        <Sidenav />
        <Main />
    </div>
  );
}

export default App;
