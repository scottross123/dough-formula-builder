import styles from './App.module.css';
import Header from "./layout/Header";
import Main from "./layout/Main";

const App = () => {
  return (
    <div className={styles.app}>
        <Header />
        <Main />
    </div>
  );
}

export default App;
