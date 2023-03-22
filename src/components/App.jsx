import { Routes, Route } from "react-router-dom";
import { Searcher } from "./Searcher";
import { Main } from "./Main";
import styles from "../styles/App.module.css";
import { OpenBook } from "./OpenBook";

export function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Searcher />
              <Main />
            </>
          }
        ></Route>
        <Route path="openBook" element={<OpenBook />}></Route>
      </Routes>
    </div>
  );
}
