import React, { createContext, useState } from "react";
import Todo from "../modles/Todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{children:any}> = (props) => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const onAddTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodo((prev) => {
      return prev.concat(newTodo);
    });
  };

  const deleted = (value: string) => {
    setTodo((prev) => {
      return prev.filter((li) => li.text !== value);
    });
  };

  const contextValue: TodosContextObj = {
    items: todo,
    addTodo: onAddTodo,
    removeTodo: deleted,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
