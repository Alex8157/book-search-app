import { Link } from "react-router-dom";
import book from "../../../store/openBook";
import styles from "./Book.module.css";

export const Book = (props) => {
  const openBook = () => {
    book.changeOpenBook(props.book);
  };

  return (
    <Link to="openBook" className={styles.book} onClick={openBook}>
      <div className={styles.cover}>
        {props.book.volumeInfo.imageLinks ? (
          <img
            className={styles.goodImg}
            src={props.book.volumeInfo.imageLinks.smallThumbnail}
          />
        ) : (
          <img
            className={styles.badImg}
            src="https://www.hot-motor.ru/body/clothes/images/no_icon.png"
          />
        )}
      </div>
      <h3>{props.book.volumeInfo.title}</h3>
      <span>
        {props.book.volumeInfo.authors &&
          props.book.volumeInfo.authors.join(", ")}
      </span>
      <span>{props.book.volumeInfo.categories}</span>
    </Link>
  );
};
