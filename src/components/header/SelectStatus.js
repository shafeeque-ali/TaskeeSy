import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectStatus({ filter, setFilter }) {
  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box sx={{ minWidth: "6rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Status"
          onChange={handleChange}
          //   sx={{height:"3rem"}}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"pending"}>Pending</MenuItem>
          <MenuItem value={"in-progress"}>In Progress</MenuItem>
          <MenuItem value={"completed"}>Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectStatus;
