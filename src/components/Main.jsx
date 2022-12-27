import { useState } from "react"
import Todo from "./Todo";
import "./main.css"

import { v4 as uuid } from 'uuid';

function Main(){

    const [addedTodos, setAddedTodos] = useState([]);
    const [showing, setShowing] = useState(1);

    function createNewTodo(e){
        if(e.type == "keydown" && e.key == "Enter" || e.type == "blur"){
            if(e.target.value.length > 0){
                setAddedTodos([...addedTodos, {text: e.target.value, id: uuid(), completed: false}]);
                e.target.value = '';
            }
        }
    }



    return (
        <main>
            <div className="new-todo">
                <input type="text" placeholder="Create a new todo..." onBlur={createNewTodo} onKeyDown={createNewTodo}/>   
            </div>    
            <ul className="added-todos">
                {addedTodos.map(todo => (
                    <Todo text={todo.text} id={todo.id} completed={todo.completed} key={todo.id}/>
                ))}
            </ul> 
            <div className="options">
                <span className="itens-left">{addedTodos.length == 1 ? `${addedTodos.length} item left` : `${addedTodos.length} items left`}</span>
                <div className="buttons">
                    <button onClick = {() => (setShowing(1))} className={showing === 1 && "active"}>All</button>
                    <button onClick = {() => (setShowing(2))} className={showing === 2 && "active"}>Active</button>
                    <button onClick = {() => (setShowing(3))} className={showing === 3 && "active"}>Completed</button>
                </div>
                <button className="clear">Clear Completed</button>
            </div>       
        </main>
    )
}

export default Main