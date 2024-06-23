// onChange : WE WILL BE USING ONCHANGE TO GET THE VALUE FROM INPUT
// form,onSubmit :

// useRef : (current.value)  We can use useRef instead of useState as by onchange each time states are getting changed and whole
// page is updated which is of no use

import { useContext, useRef, useState } from "react";
import css from "./AddToDo.module.css";
import { Collapse } from "bootstrap";
import { TodoItems } from "../store/todo-items-store";

function AddToDo() {
  // let [todoName, setTodoName] = useState(""); TO USE ONCHANGE
  // let [dueDate, setDueDate] = useState("");

  let contextObject = useContext(TodoItems);

  let handleNewItem = contextObject.handleAddButton;

  let todoNameElement = useRef();
  let dueDateElement = useRef();

  // DUE TO USE OF REF WE CAN AVOID THIS
  // let handleTodoName = (event) => {
  //   setTodoName(event.target.value);
  // };
  // let handleDueDate = (event) => {
  //   setDueDate(event.target.value);
  // };

  let handleAddButton = (event) => {
    console.log(event);
    event.preventDefault();

    let todoName = todoNameElement.current.value;
    console.log("hi : " + todoName);
    let dueDate = dueDateElement.current.value;
    handleNewItem(todoName, dueDate);
    // SETTING BOTH INPUT BLACK AFTER PASSING FUNCTUONS
    // setDueDate("");
    // setTodoName("");
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <form onSubmit={handleAddButton} className="row r-row">
      <div className="col-6 =">
        <input
          type="text"
          placeholder="Enter Todo here"
          // onChange={handleTodoName} no need of onchange
          // value={todoName} // again value is assigned whish is emepty
          ref={todoNameElement} // ref need to be added to get current value
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          // value={dueDate}
          // onChange={handleDueDate}
          ref={dueDateElement}
        />
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-success r-button"
          // onClick={handleAddButton}  // as we are using form we use onSubmit
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddToDo;
