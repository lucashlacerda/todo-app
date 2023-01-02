import deleteImage from "../assets/icon-cross.svg";
import checkedImage from "../assets/icon-check.svg";

const Todo = (props) => {
  console.log("todo reloaded " + props.id);
  return (
    <>
      <li className={`${props.todo.completed && "checked-text"}`}>
        <span
          className={`checkbox ${props.todo.completed && "completed"}`}
          onClick={() => props.checkTodo(props.todo.id)}
        >
          {props.todo.completed && <img src={checkedImage}></img>}
        </span>
        {props.todo.text}
        <img
          src={deleteImage}
          className="delete-button"
          onClick={() => props.removeTodo(props.todo.id)}
          alt="Delete Todo"
        />
      </li>
      <hr />
    </>
  );
};

export default Todo;
