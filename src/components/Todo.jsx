import deleteImage from '../assets/icon-cross.svg'
import checkedImage from '../assets/icon-check.svg'

function Todo(props){
    return(
        <>
        <li className={`${props.todo.completed && 'checked-text'}`}>
            <span className={`checkbox ${props.todo.completed && 'completed'}`}
                onClick={()=> props.checkTodo(props.todo.id)}>{props.todo.completed && <img src={checkedImage}></img>}</span>
            {props.todo.text}
            <img src={deleteImage}  onClick={() => props.removeTodo(props.todo.id)} alt="Delete Todo" />
        </li>
        <hr />
        </>
    )
}


export default Todo