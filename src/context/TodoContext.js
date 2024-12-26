import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo:"This is a Todo",
            completed: false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete: (id)=>{}
});

export const TodoContextProvider = TodoContext.Provider;

const useTodoContext = ()=> useContext(TodoContext);
export default useTodoContext;
