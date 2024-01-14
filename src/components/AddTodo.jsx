import React, { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  function handleNameChange(event) {
    setTodoName(event.target.value);
  }

  function handleDateChange(event) {
    setDueDate(event.target.value);
  }

  function handleAddButtonClicked() {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Item Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
