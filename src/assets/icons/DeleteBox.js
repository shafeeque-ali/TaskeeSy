import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTask } from "../../api/taskApi";

import React from "react";

function DeleteBox({ setTasks, tasks = [] }) {
  // const [isDeletBoxDisabled, setIsDeletBoxDisabled] = useState(false);

  const selectedTaskees = () => tasks.filter((e) => e.isSelected === true);

  const handleOnClick = async () => {
    if (selectedTaskees().length !== 1) {
      return;
    }
    const deletedData = await removeTasks(selectedTaskees()[0].id);
    setTasks((prev) => {
      const arr = [];
      for (let i = 0; i < prev.length; i++) {
        const e = prev[i];
        if (e.id !== selectedTaskees()[0].id) {
          arr.push(e);
        }
      }
      return arr;
    });
    console.log("Form deleted", deletedData);
  };

  async function removeTasks(id) {
    try {
      const response = await deleteTask(id);
      console.log(response);

      if (response.statusText !== "OK") {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.data;
    } catch (err) {
      // setError(err.message);
    }
  }
  return (
    // <img src={DeleteForeverOutlinedIcon} alt='DropBox'></img>
    <DeleteIcon
      onClick={handleOnClick}
      sx={{
        fontSize: 50,
        color: "brown",
        cursor: selectedTaskees().length === 1 ? "pointer" : "not-allowed",
        "&:active": {
          color: selectedTaskees().length === 1 ? "red" : "brown", 
          fontSize: selectedTaskees().length === 1 ? 70 : 50,
        },
        "&:hover": {
          color: selectedTaskees().length === 1 ? "red" : "brown", 
        },
      }}
    />
  );
}

export default DeleteBox;
