import styles from './App.module.css';
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className={styles.app}>
        <Header />
        <Main />
    </div>
  );
}

export default App;
