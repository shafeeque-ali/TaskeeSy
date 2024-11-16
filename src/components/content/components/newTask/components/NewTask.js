import React from "react";
import BasicTextFields from "../../../../reusables/InputField";
import MultilineTextField from "../../../../reusables/MultilineTextField";
import { Paper, Stack } from "@mui/material";
import BasicButton from "../../../../reusables/Button";

function NewTask() {
  return (
    <div style={{ display: "flex", paddingTop: "1rem", gap: "0.61rem" }}>
      <Paper elevation={8}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <BasicTextFields />
          </div>
          <MultilineTextField />
        </div>
      </Paper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Stack spacing={1}>
          <BasicButton color="inherit" label={"close"} />
          <BasicButton label={"upload"} />
        </Stack>
      </div>
    </div>
  );
}

export default NewTask;
