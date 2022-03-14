import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import TodoModel from "./TodoModel";

const AppHeader = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div>
      <h4>Header</h4>
      <Button name="New Task" onClick={() => setMenuToggle(true)} />
      <SelectButton>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModel menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </div>
  );
};

export default AppHeader;
