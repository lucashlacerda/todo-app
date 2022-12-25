import './todo.css'
function Todo(props:any){
    return(
        <>
        <li>
            <input type="checkbox" className="check"/>
            {props.text}
        </li>
        <hr />
        </>
    )
}


export default Todo