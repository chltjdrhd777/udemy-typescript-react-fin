import React, { useState } from "react";
//useState(something) = something is expected as a return value

import TodoList from "./components/TodoList"; // import TodoList function
import NewTodo from "./components/NewTodo";
import { Todo } from "./components/todo.model";

//type "React.FC = it is function that React can understand"
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // useState([]) = an empty arry expected/ userState<Todo[]>([]) = [{id:string, text:string}]

  //////////////////////////////////////////////////
  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ]); // default setTodos= [{id,text}]. setTodos(prevTodos=>[...prevTodos, [{id:Math.random().toString(), text:text}]]) = after previous todos, add new todos
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} deleteTodo={todoDeleteHandler} />
    </div>
    // <TodoList <--- allows access to this function in Todolist.tsx />
    // <TodoList items ={} <--- {} that allows me to use the ingredient inside todos.
    // items={todos} is called "props" which has particular react type. looked like "props = {items:todos}"
    // in typescript, it cannot ensure that props would match the todos inside items object so I can set generic type in TodoList.tsx to clear this out
  );
};

export default App;
