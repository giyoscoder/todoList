import React, {useContext} from 'react';
import List from './List';
import classes from './Todo.module.css';
import { TodosContext } from '../store/store-context';


const Todos:React.FC = () => {
    const todoCtx = useContext(TodosContext);

    return <ul className={classes.todos}>
        {todoCtx.items.map(item => <List key={item.id} list={item.text} deleted={todoCtx.removeTodo.bind(null, item.text)}/>)}
    </ul>
}
export default Todos