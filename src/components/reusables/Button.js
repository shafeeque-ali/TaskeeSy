import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButton({ onClick, label,color='primary' }) {
  return (
    <Button onClick={onClick} color={color} variant="contained">
      {label}
    </Button>

    // <Stack spacing={2} direction="row">
    //   <Button variant="text">Text</Button>
    //   <Button variant="contained">Contained</Button>
    //   <Button variant="outlined">Outlined</Button>
    // </Stack>
  );
}
