import React, { useState } from "react";
import NewTask from "./components/NewTask";
import AddTaskButton from "./components/AddTaskButton";

function NewTaskContainer() {
  const [isOpenNew, setIsOpenNew] = useState(false);

  const handleAddButtonClick = () => {
    setIsOpenNew(true);
  };
  return (
    <div style={{ display: "flex" ,  }}>
      <div
        style={{ width: `${!isOpenNew ? "0rem" : "auto"}`, overflow: "hidden" }}
      >
        {isOpenNew && <NewTask />}
      </div>
      <div
        style={{
          width: `${isOpenNew ? "0rem" : "auto"}`,
          marginBottom: "3rem",
          overflow: "hidden",
        }}
      >
        <AddTaskButton onClick={handleAddButtonClick} />
      </div>
    </div>
  );
}

export default NewTaskContainer;
