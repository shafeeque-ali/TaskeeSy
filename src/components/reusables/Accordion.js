import * as React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TickBox from "./TickBox";

function AccordionUsage({ task, setSeletedTasks }) {
  const handleCheckChange = (e) => {
    console.log({ e: e.target.checked });
    setSeletedTasks(e.target.checked, task);
  };
  let bgColor = () => {
    if (task.status === "in-progress") {
      return "#B3D7F5";
    }
    if (task.status === "completed") {
      return "#B3F5D2";
    }
    return "#FAF2A2";
  };

  return (
    <Accordion sx={{ backgroundColor: bgColor() }}>
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
