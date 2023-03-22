import { makeAutoObservable } from "mobx";

class openBook {
  openBook = "";
  constructor() {
    makeAutoObservable(this);
  }
  changeOpenBook(action) {
    this.openBook = action;
  }
  cleanOpenBook() {
    this.openBook = "";
  }
}

export default new openBook();
