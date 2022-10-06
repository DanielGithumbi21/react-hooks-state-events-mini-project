import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    setCategory(e.target.name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(name, category);
  };
  return (
    <form className="new-task-form" onSubmit={onSubmit}>
      <label>
        Details
        <input value={name} onChange={handleChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={category} onChange={handleChange} name="category">
          {categories.map((category) => (
            <>
              {category !== "ALL" && <option key={category}>{category}</option>}
            </>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
