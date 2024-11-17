import React from "react";
import AccordionUsage from "../../../reusables/Accordion";

function Task({ tasks = [], setSeletedTasks }) {
  return (
    <>
      {tasks.map((task, index) => (
        <AccordionUsage
          key={task.title + index}
          setSeletedTasks={setSeletedTasks}
          task={task}
        />
      ))}
    </>
  );
}

export default Task;
