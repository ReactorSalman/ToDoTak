import React, { useState } from "react";

const ToDoForm = ({ appendTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    appendTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        placeholder="Enter task...."
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;
