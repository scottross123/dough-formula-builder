import styles from './App.module.css';
import { Fragment } from "react";
import Builder from "./pages/builder/Builder";
import Header from "./components/header/Header";

const App = () => {
  return (
      <Fragment>
          <Header />

          <Builder />
      </Fragment>
  );
}

export default App;
