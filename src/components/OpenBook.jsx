import { observer } from "mobx-react-lite";
import book from "../store/openBook";
import styles from "../styles/OpenBook.module.css";

export const OpenBook = observer(() => {
  return (
    <>
      <header />
      {book.openBook && (
        <div className={styles.book}>
          <div className={styles.cover}>
            {book.openBook.volumeInfo.imageLinks ? (
              <img
                className={styles.goodImg}
                src={book.openBook.volumeInfo.imageLinks.smallThumbnail}
              />
            ) : (
              <img
                className={styles.badImg}
                src="https://www.hot-motor.ru/body/clothes/images/no_icon.png"
              />
            )}
          </div>
          <div className={styles.text}>
            <h3>{book.openBook.volumeInfo.title}</h3>
            <div>
              <h4>Authors:</h4>
              {book.openBook.volumeInfo.authors &&
                book.openBook.volumeInfo.authors.join(", ")}
            </div>
            <div>
              <h4>Description:</h4> {book.openBook.volumeInfo.description}
            </div>
            <div>
              <h4>Category:</h4> {book.openBook.volumeInfo.categories}
            </div>
          </div>
        </div>
      )}
    </>
  );
});
