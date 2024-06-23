// Uisng useContext to get todo elements array

// using useContext object brought directly handledelete click method from main

import ToDoItem1 from "./ToDoItem1";
import css from "./Items.module.css";
import { useContext } from "react";
import { TodoItems } from "../store/todo-items-store";

const Items = () => {
  let contextObject = useContext(TodoItems);
  // console.log(todo1);

  let todoItems = contextObject.todoItems; // WE GOTTHE ARRAY

  return (
    <div className={`${css.itemsContainer}`}>
      {todoItems.map((object) => (
        <ToDoItem1
          key={object.task}
          task={object.task}
          date={object.date}
        ></ToDoItem1>
      ))}
    </div>
  );
};
export default Items;
