import { useContext } from "react";
import { TodoItems } from "../store/todo-items-store";

let WelecomeMessage = () => {
  let contextObject = useContext(TodoItems);

  let todoItemsFromContext = contextObject.todoItems;

  return todoItemsFromContext.length === 0 && <h1>WELCOME TO TODO LIST </h1>;
};

export default WelecomeMessage;
