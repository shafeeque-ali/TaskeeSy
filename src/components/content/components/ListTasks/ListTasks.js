import React from "react";
import Task from "./Task";
import { Container, useTheme } from "@mui/material";

function ListTasks({tasks,setTasks}) {
  const theme = useTheme();
  return (
    <Container
      style={{
        padding: 0,
        // backgroundColor: "#EFE14B",
      }}
      sx={{
        width: "40rem",

        [theme.breakpoints.down("sm")]: {
          width: "auto",
        },
      }}
    >
      <Task setTasks={setTasks} tasks={tasks} />
    </Container>
  );
}

export default ListTasks;
