import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function MultilineTextField() {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "70ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="standard"
      />
    </Box>
  );
}

export default MultilineTextField;
