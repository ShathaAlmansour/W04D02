import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

const ToDo = () => {
  const [todos, setTodos] = useState([
    { id: "1", name: "Play" },
    { id: "2", name: "Sleep" },
  ]);

  const handleSubmi = (e) => {
    e.preventDefault();

    const todo = {
      id: todos.length + 1,
      name: e.target.task.value,
    };
    setTodos([...todos, todo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handlUpdate = (id) => {
      const update = prompt("Enter Update");
      const arr = todos.map((item) => {
          if (item.id == id ){
              return {...item, name: update};
          } else {
              return item;
          }
      });
      console.log(arr);
      setTodos(arr);
  };

  return (
    <div className="todo">
      <form onSubmit={handleSubmi}>
        <input type="text" name="task" />
        <button>Add Task</button>
      </form>
      <ul className="todos">
        {todos.map((todo, i) => (
          <TodoItem todo={todo} key={i} 
          handleDelete={handleDelete} 
          handlUpdate={handlUpdate}/>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
