import { Typography } from "@mui/material";
import React from "react";
import SelectStatus from "./SelectStatus";

function HeaderContainer({ filter, setFilter }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h1">
        TASKeeSY
      </Typography>
      <SelectStatus filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default HeaderContainer;
