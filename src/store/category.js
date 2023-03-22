import { makeAutoObservable } from "mobx";

class Category {
  category = "all";
  constructor() {
    makeAutoObservable(this);
  }
  changeCategory(action) {
    this.category = action;
  }
}

export default new Category();
