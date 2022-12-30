import { useState, useEffect } from "react"
import Todo from "./Todo";


import { v4 as uuid } from 'uuid';

function Main(){

    const [addedTodos, setAddedTodos] = useState([]);
    const [showingTodos, setShowingTodos] = useState([]);
    const [showFilter, setShowFilter] = useState(1);


    useEffect(()=>{
        if(showFilter == 1){
            setShowingTodos(addedTodos);
        }else if(showFilter == 2){
            setShowingTodos(() => (addedTodos.filter(t => t.completed === false)));
        }else if(showFilter == 3)
            setShowingTodos(() => (addedTodos.filter(t => t.completed === true)));
    },[showFilter, addedTodos])

    function createNewTodo(e){
        if(e.type == "keydown" && e.key == "Enter" || e.type == "blur"){
            if(e.target.value.length > 0){
                setAddedTodos([...addedTodos, {text: e.target.value, id: uuid(), completed: false}]);
                e.target.value = '';
            }
        }
    }

    function removeTodo(id){
        setAddedTodos(currentTodos => (currentTodos.filter(todo => todo.id !== id)))
    }

    function checkTodo(id){

        setAddedTodos(currentTodos => {
            let newTodos = [];
            currentTodos.forEach(t => {
                if(t.id == id){
                    newTodos = [...newTodos, {...t, completed: !t.completed}];
                    
                }else
                    newTodos = [...newTodos, t];
            })
            return newTodos;
        })

    }

    function clearCompleted(){
        setAddedTodos(currentTodos => (currentTodos.filter(todo => todo.completed == false)));
    }

    return (
        <main>
            <div className="new-todo">
                <input type="text" placeholder="Create a new todo..." onBlur={createNewTodo} onKeyDown={createNewTodo}/>   
            </div>    
            <ul className="added-todos">
                {showingTodos.map(todo => (
                    <Todo todo={todo} key={todo.id} removeTodo={removeTodo} checkTodo={checkTodo}/>
                ))}
            </ul> 
            <div className="options">
                <span className="itens-left">{showingTodos.length == 1 ? `${showingTodos.length} item left` : `${showingTodos.length} items left`}</span>
                <div className="buttons">
                    <button onClick = {() => (setShowFilter(1))} className={`${showFilter === 1 && "active"} filter`}>All</button>
                    <button onClick = {() => (setShowFilter(2))} className={`${showFilter === 2 && "active"} filter`}>Active</button>
                    <button onClick = {() => (setShowFilter(3))} className={`${showFilter === 3 && "active"} filter`}>Completed</button>
                </div>
                <button className="clear" onClick={clearCompleted}>Clear Completed</button>
            </div>       
        </main>
    )
}

export default Main