import * as React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TickBox from "./TickBox";

function AccordionUsage({ task, setTasks }) {
  const handleCheckChange = (event) => {
    console.log({ event: event.target.checked });
    setTasks((preves) => {
      let arr = [];
      for (let i = 0; i < preves.length; i++) {
        const e = preves[i];
        if (e.id === task.id) {
          e.isSelected = event.target.checked;
        }
        arr.push(e);
      }
      return arr;
    });
  };

  let bgColor = () => {
    if (task.status === "in-progress") {
      return "#B2D9FB";
    }
    if (task.status === "completed") {
      return "#9EF9C8";
    }
    return "#FDF57B";
  };

  return (
    <Accordion sx={{ backgroundColor: bgColor() }}>
      {/* {console.log({ task, setTasks })} */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <TickBox checked={task.isSelected} onChange={handleCheckChange} />
          <p style={{ fontWeight: 600 }}> {task.title}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>{task.description}</AccordionDetails>
    </Accordion>
  );
}

export default AccordionUsage;
