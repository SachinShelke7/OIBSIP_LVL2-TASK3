import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";

const TodoModel = ({ menuToggle, setMenuToggle }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, status);
  };

  return (
    <>
      {menuToggle && (
        <div>
          <div>
            <div onClick={() => setMenuToggle(false)}>
              <MdOutlineClose />
            </div>
            <form onSubmit={handleSubmit}>
              <h1>Add Task</h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="status">
                Status
                <select
                  type="status"
                  id="status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
              <div>
                <Button type="submit" name="Add Task" />
                <Button
                  type="button"
                  name="Cancel"
                  onClick={() => setMenuToggle(false)}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoModel;
