import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, minWidth: "70ch", } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}

export default BasicTextFields;
