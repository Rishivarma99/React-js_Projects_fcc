// IMPORTED TODOITEMS FROM CONTEXT
// Using useReducer

import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Items from "./components/Items";
import { useReducer, useState } from "react";
import WelecomeMessage from "./components/WelcomeMessage";
import { TodoItems } from "./store/todo-items-store";

function TodoList1() {
  let todoItems1 = [
    {
      task: "go to college",
      date: "26/01/2024",
    },
    {
      task: "get milk ",
      date: "26/01/2023",
    },
  ];

  let [todoItems, addItems] = useState(todoItems1);

  let handleAddButton = (itemName, itemDueDate) => {
    // console.log(`name : ${itemName}`);
    // console.log(`name : ${itemDueDate}`);
    // const newTodoItem = [...todoItems, { task: itemName, date: itemDueDate }]; // NOT GOOD FOR COMPLEX TASKS
    // addItems(newTodoItem);
    // TO UPDATE VALUES USING FUNCTIONSAL UPDATES
    addItems((curValue) => [
      ...curValue,
      { task: itemName, date: itemDueDate },
    ]);
  };

  let handleDeleteItem = (itemToDelete) => {
    console.log(itemToDelete);
    //  use filter method
    let newTodoItem = todoItems.filter((item) => item.task != itemToDelete);
    addItems(newTodoItem);
  };

  return (
    <TodoItems.Provider
      value={{
        todoItems: todoItems,
        handleAddButton: handleAddButton,
        handleDeleteItem: handleDeleteItem,
      }}
    >
      {/* //value stores the default value and when todo items change whole page changes  */}
      <center className="todo-container m-3">
        <AppName />
        <AddToDo />
        <WelecomeMessage></WelecomeMessage>
        <Items></Items>
      </center>
    </TodoItems.Provider>
  );
}

export default TodoList1;

{
  /* <ToDoItem1 task={"Hw-1"} date={"26/01/2024"}></ToDoItem1>
<ToDoItem1 task={"Hw-2"} date={"26/01/2024"}></ToDoItem1> */
}
