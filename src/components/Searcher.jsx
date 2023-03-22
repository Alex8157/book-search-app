import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Select } from "./UI/select/Select";
import { PostService } from "../API/PostService";
import category from "../store/category";
import sorting from "../store/sorting";
import books from "../store/books";
import styles from "../styles/Searcher.module.css";

export const Searcher = observer(() => {
  const [valueCategory, changeCategory] = useState("all");
  const [valueSorting, changeSorting] = useState("relevance");
  const [word, changeWord] = useState("");

  const handleСhange = (event) => {
    changeWord(event.target.value);
  };

  const download = async () => {
    category.changeCategory(valueCategory);
    sorting.changeSorting(valueSorting);
    books.changeSearchWord(word);
    books.changeLoading(true);
    await PostService.getNewBooks();
    books.changeLoading(false);
  };

  const foo = (e) => {
    e.keyCode === 13 && download();
  };

  return (
    <div className={styles.searcher}>
      <h1>Search for books</h1>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleСhange}
          onKeyDown={foo}
          value={word}
        />
        <img
          onClick={download}
          className={styles.icon}
          src="https://cdn-icons-png.flaticon.com/512/622/622605.png"
          alt="loupe"
        />
      </div>
      <div className={styles.selectors}>
        <div className={styles.selector}>
          <span>Categories</span>
          <Select
            callback={(value) => changeCategory(value)}
            options={[
              { value: "all" },
              { value: "partial" },
              { value: "full" },
              { value: "free-ebooks" },
              { value: "paid-ebooks" },
              { value: "ebooks" },
            ]}
          ></Select>
        </div>
        <div className={styles.selector}>
          <span>Sorting by</span>
          <Select
            callback={(value) => changeSorting(value)}
            options={[{ value: "relevance" }, { value: "newest" }]}
          ></Select>
        </div>
      </div>
    </div>
  );
});
