import { Typography } from "@mui/material";
import React from "react";
import BasicSelect from "../reusables/Select";

function HeaderContainer() {
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
      {/* <div style={{backgroundColor:"red"}}> */}
        <BasicSelect />
      {/* </div> */}
    </div>
  );
}

export default HeaderContainer;
