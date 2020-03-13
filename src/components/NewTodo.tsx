import React, { useRef } from "react";
//{useRef} allows me to refer to HTML element
//so, I targetted <input> tag by adding ref={textInputRef}

import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null); //null = default value. after summiting is started, it would run at that time
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText); //onAddTodo: todoAddHandler()
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-controller">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
  //props = "onSubmit={todoSubmitHandler}"
  //onsubmit = react syntax which cooperate with things sent from from.
  // first, something is submitted
  // second, it is directly sent to todoSubmitHandler
};

export default NewTodo;
