import { observer } from "mobx-react-lite";
import { PostService } from "../API/PostService";
import { Books } from "./Books";
import books from "../store/books";
import styles from "../styles/Main.module.css";
import { useEffect } from "react";

export const Main = observer(() => {
  useEffect(() => {
    books.totalBooks === 0 && download();
  }, []);
  const download = async () => {
    books.changeLoading(true);
    await PostService.getBooks();
    books.changeLoading(false);
  };
  return (
    <div className={styles.main}>
      {books.loading && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}
      <span>Found {books.totalBooks} results</span>
      <Books />
      <button onClick={download}>Load more</button>
    </div>
  );
});
