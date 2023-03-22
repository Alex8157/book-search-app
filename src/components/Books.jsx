import { observer } from "mobx-react-lite";
import { Book } from "./UI/book/Book";
import books from "../store/books";
import styles from "../styles/Books.module.css";

export const Books = observer(() => {
  return (
    <>
      {books.totalBooks > 0 ? (
        <div className={styles.books}>
          {books.books.map((book, index) => {
            return <Book key={index} book={book} />;
          })}
        </div>
      ) : (
        <div className={styles.books}></div>
      )}
    </>
  );
});
