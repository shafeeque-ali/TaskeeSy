import React from "react";
import AccordionUsage from "../../../reusables/Accordion";

function Task({ tasks = [], setTasks }) {
  return (
    <>
      {tasks.map((task, index) => (
        <AccordionUsage
          key={task.title + index}
          setTasks={setTasks}
          task={task}
        />
      ))}
    </>
  );
}

export default Task;
