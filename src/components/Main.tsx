import { useState } from "react"
import Todo from "./Todo";

function Main(){

    const [addedTodos, setAddedTodos] = useState([]);

    return (
        <main>
            <div className="new-todo">
                <input type="checkbox" /> 
                <input type="text" />   
            </div>    
            <ul className="added-todos">
                {addedTodos.map(todo => (
                    <Todo text={todo.text}/>
                ))}
            </ul>        
        </main>
    )
}

export default Main