import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TickBox({ checked, onChange }) {
  return (
    <Checkbox {...label} size="small" checked={checked} onChange={onChange} />
  );
}

export default TickBox;
