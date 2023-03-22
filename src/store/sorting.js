import { makeAutoObservable } from "mobx";

class Sorting {
  sorting = "relevance";
  constructor() {
    makeAutoObservable(this);
  }
  changeSorting(action) {
    this.sorting = action;
  }
}

export default new Sorting();
