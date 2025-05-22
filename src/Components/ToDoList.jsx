import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
    { id: 3, text: "Task 3", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function handleAddTask() {
    if (newTask.trim() === "") return;
    const newTaskObj = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]); // Add the new task to the list
    setNewTask(""); // Clear the input field
    document.getElementById("task-input").focus(); // Focus back on the input field
  }
  function handleToggleTask(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }
  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  function moveTaskUp(id) {
    const index = tasks.findIndex((task) => task.id === id); // Find the index of the task to move
    if (index > 0) {
      const updatedTasks = [...tasks]; // Create a shallow copy of the tasks array
      const [movedTask] = updatedTasks.splice(index, 1); // Remove the task from its current position
      updatedTasks.splice(index - 1, 0, movedTask); // Insert it at the new position
      setTasks(updatedTasks); // Update the state with the new order
    }
  }
  function moveTaskDown(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const [movedTask] = updatedTasks.splice(index, 1);
      updatedTasks.splice(index + 1, 0, movedTask);
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-list">
      <img
        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
        alt="To-Do List Icon"
      />
      <h1>To-Do List</h1>
      <input
        id="task-input"
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button className="add-btn" onClick={handleAddTask}>
        Add Task
      </button>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span className={task.completed ? "task-completed text" : "text"}>
              {task.text}
            </span>
            <button onClick={() => moveTaskUp(task.id)}>⬆️</button>
            <button onClick={() => moveTaskDown(task.id)}>⬇️</button>
            <button onClick={() => handleDeleteTask(task.id)}>🗑️</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
