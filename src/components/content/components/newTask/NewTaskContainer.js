import React, { useState } from "react";
import NewTask from "./components/NewTask";
import AddTaskButton from "./components/AddTaskButton";

function NewTaskContainer({
  setTasks,
  floatingButtonType,
  seletedTasks,
  setSeletedTasks,
}) {
  const [isOpenNew, setIsOpenNew] = useState(false);

  const handleAddButtonClick = () => {
    setIsOpenNew(true);
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ width: `${!isOpenNew ? "0rem" : "auto"}`, overflow: "hidden" }}
      >
        {isOpenNew && (
          <NewTask
            setSeletedTasks={setSeletedTasks}
            seletedTasks={seletedTasks}
            setIsOpenNew={setIsOpenNew}
            setTasks={setTasks}
          />
        )}
      </div>
      <div
        style={{
          width: `${isOpenNew ? "0rem" : "auto"}`,
          padding: `${isOpenNew ? "0rem" : "1rem"}`,
          marginBottom: "3rem",
          overflow: "hidden",
        }}
      >
        <AddTaskButton
          type={floatingButtonType}
          onClick={handleAddButtonClick}
        />
      </div>
    </div>
  );
}

export default NewTaskContainer;
