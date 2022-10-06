import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  const onTaskSubmit = (name, category) => {
    setTasks([...tasks, name]);
    setCategories([...categories, category]);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} />
      <NewTaskForm onTaskFormSubmit={onTaskSubmit} categories={categories} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
