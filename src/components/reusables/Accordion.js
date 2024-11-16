import * as React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TickBox from "./TickBox";

function AccordionUsage({ header, description }) {
  const [checked, setChecked] = useState(false);
  const handleCheckChange = () => {
    setChecked(!checked);
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <TickBox checked={checked} onChange={handleCheckChange} />
          <p style={{ fontWeight: 600 }}> {header}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>{description}</AccordionDetails>
    </Accordion>
  );
}

export default AccordionUsage;
