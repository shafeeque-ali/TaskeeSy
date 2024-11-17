import * as React from "react";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { changeTaskStatus } from "../../api/taskApi";

function VerticalToggleButtons({
  array = [],
  seletedTasks = [],
  setTasks = [],
}) {
  const [view, setView] = React.useState("module");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const handleToggClick = async (el) => {
    const data = await changeStatus(seletedTasks[0].id, el.status);
    setTasks((prev) => {
      for (let i = 0; i < prev.length; i++) {
        const e = prev[i];
        if (e.id === seletedTasks[0].id) {
          e.status = data.status;
        }
      }
      return [...prev];
    });
  };

  async function changeStatus(id, status) {
    try {
      const response = await changeTaskStatus(id, { status });
      if (response.statusText !== "OK") {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.data;
    } catch (err) {
      // setError(err.message);
    }
  }

  const activeStatus = () => {
    if (seletedTasks.length > 1) return "none";
    return seletedTasks[0]
      ? seletedTasks[0].status
        ? seletedTasks[0].status
        : "none"
      : "none";
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
      disabled={
        seletedTasks.length === 0 || seletedTasks.length > 1 ? true : false
      }
    >
      {array.map((el) => {
        return (
          <ToggleButton
            key={el.status}
            onClick={() => handleToggClick(el)}
            color={el.status === activeStatus() ? el.bgColor : "inherit"}
            sx={{
              position: "relative",
              backgroundColor:
                el.status === activeStatus() ? el.bgColor : "inherit",
              "&:hover": {
                color: el.fontColor,
                backgroundColor: el.bgColor,
              },
            }}
            value="module"
            aria-label="module"
          >
            <ViewModuleIcon
              sx={{
                color: el.status === activeStatus() ? el.fontColor : "inherit",
              }}
            />
            {/* {el.status === activeStatus() && (
              <Typography
                variant="body2"
                sx={{
                  position: "absolute",
                  left: "2.5rem",
                  color: "GrayText",
                }}
              >
                InProgress
              </Typography>
            )} */}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}

export default VerticalToggleButtons;