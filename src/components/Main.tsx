import { useState } from "react"
import Todo from "./Todo";
import "./main.css"

interface Todo{
    text: string;
    id: string;
    selected: boolean;
}

function Main(){

    const [addedTodos, setAddedTodos] = useState<Todo[]>([{text: "oi", id:"1", selected: false}]);

    return (
        <main>
            <div className="new-todo">
                <input type="text" placeholder="Create a new todo..."/>   
            </div>    
            <ul className="added-todos">
                {addedTodos.map(todo => (
                    <Todo text={todo.text} id={todo.id} selected={todo.selected} key={todo.id}/>
                ))}
            </ul> 
            <div className="options">
                <span className="itens-left">{addedTodos.length == 1 ? `${addedTodos.length} item left` : `${addedTodos.length} items left`}</span>
                <div className="buttons">
                    <button>All</button><button>Active</button><button>Completed</button>
                </div>
                <button className="clear">Clear Completed</button>
            </div>       
        </main>
    )
}

export default Main