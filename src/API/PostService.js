import category from "../store/category";
import sorting from "../store/sorting";
import books from "../store/books";

const checkCategory = () => {
  return category.category !== "all" ? `&filter=${category.category}` : "";
};

export class PostService {
  static async getBooks() {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${
        books.searchWord
      }${checkCategory()}&orderBy=${sorting.sorting}&startIndex=${
        books.start
      }&maxResults=30&key=AIzaSyBHD7zYG_Czt96i7UEbsIlHA-naLLMnJX8`
    ).then((response) => response.json());
    books.addBooks(response.items);
    books.changeTotal(response.totalItems);
    return response;
  }
  static async getNewBooks() {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${
        books.searchWord
      }&orderBy=${sorting.sorting}${checkCategory()}&startIndex=${
        books.start
      }&maxResults=30&key=AIzaSyBHD7zYG_Czt96i7UEbsIlHA-naLLMnJX8`
    ).then((response) => response.json());
    books.changeBooks(response.items);
    books.changeTotal(response.totalItems);
    return response;
  }
}
