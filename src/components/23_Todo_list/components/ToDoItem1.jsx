import { useContext } from "react";
import css from "./ToDoItem1.module.css";
import { AiFillBank } from "react-icons/ai";
import { TodoItems } from "../store/todo-items-store";

function ToDoItem1(props) {
  let todoTask = props.task;
  let todoDate = props.date;

  let contextObject = useContext(TodoItems); // TO GET HE DELETE FUNTION FROM STORE

  let onDeleteCLick = contextObject.handleDeleteItem;

  return (
    <div className="row r-row">
      <div className="col-6 =">
        {" "}
        <AiFillBank />
        {todoTask}
      </div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className={` ${css.mybutton} btn btn-danger`}
          onClick={() => onDeleteCLick(todoTask)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem1;
