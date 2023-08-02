import React, {useRef, useContext} from 'react';
import { TodosContext } from '../store/store-context';
import classes from './NewTodo.module.css';

const NewTodos = () => {
    const {addTodo} = useContext(TodosContext);
    const todo = useRef<HTMLInputElement>(null);

    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault();

        let enteredText = todo.current!.value;

        if(enteredText.trim().length === 0) {
            return;
        }else {
            addTodo(enteredText)
            todo.current!.value = ''
        }
        
    }
    return <>
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" name="text" id="text" ref={todo }/>
            <button>Send</button>
        </form>
    </>
    
}

export default NewTodos;