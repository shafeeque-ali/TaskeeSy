import { Paper } from "@mui/material";
import React from "react";
import VerticalToggleButtons from "../../../reusables/ToggleButtonGroup";

function StatusChangerContainer({ setTasks, tasks }) {

  const stausArr = [
    {
      status: "pending",
      lable: "Pending",
      bgColor: "#F8E519",
      fontColor: "#FDEE4F",
    },
    {
      status: "in-progress",
      lable: "In Progress",
      fontColor: "#5B8EF4",
      bgColor: "#3575F5",
    },
    {
      status: "completed",
      lable: "completed",
      fontColor: "#4BD376",
      bgColor: "#20CE57",
    },
  ];

  return (
    <Paper elevation={5}>
      <VerticalToggleButtons
        setTasks={setTasks}
        tasks={tasks}
        array={stausArr}
      />
    </Paper>
  );
}

export default StatusChangerContainer;
