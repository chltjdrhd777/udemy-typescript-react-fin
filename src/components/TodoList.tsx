import React from "react";

import "./TodoList.css";

interface propsResultShape {
  items: { id: string; text: string }[];
  deleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<propsResultShape> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>
            {todo.id}
            {todo.text}
          </span>
          <button onClick={props.deleteTodo.bind(null, todo.id)}>DELETE</button>
        </li> // bind.(null,todo.id) => combine preliminary arguments with deleteTodo. afterall, "deleteTodo(todo.id)"
      ))}
    </ul>
  ); //key ={} is a special feature of react. it allows me to distinguish the repeated elements
};

export default TodoList;
