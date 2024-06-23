// to create a array todo items context

import { createContext } from "react";
export let TodoItems = createContext({
  todoItems: [],
  deleteItem: () => {},
  addItem: () => {},
}); // to declare a array
