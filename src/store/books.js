import { makeAutoObservable } from "mobx";

class Books {
  books = [];
  totalBooks = 0;
  loading = false;
  start = 0;
  searchWord = "";
  constructor() {
    makeAutoObservable(this);
  }
  addBooks(action) {
    this.books.push(...action);
    this.start = this.start + 30;
  }
  changeBooks(action) {
    this.books = action;
    this.start = 30;
  }
  changeTotal(action) {
    this.totalBooks = action;
  }
  changeLoading(action) {
    this.loading = action;
  }
  changeSearchWord(action) {
    this.searchWord = action;
  }
}

export default new Books();
