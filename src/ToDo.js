import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      value={todo.id}
      className={todo.complete ? "todo strike" : "todo"}
      onClick={handleClick}
    >
      <div className="task-alignment">{todo.task}</div>
    </div>
  );
};

export default ToDo;
