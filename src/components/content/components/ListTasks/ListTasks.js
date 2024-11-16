import React from "react";
import Task from "./Task";
import { Container, useTheme } from "@mui/material";

function ListTasks() {
  const theme = useTheme();
  return (
    <Container
      style={{
        padding: 0,
        backgroundColor: "#EFE14B",
        // overflow:"scroll"
      }}
      sx={{
        width: "40rem",

        [theme.breakpoints.down("sm")]: {
          width: "auto",
        },
      }}
    >
      <Task />
    </Container>
  );
}

export default ListTasks;
