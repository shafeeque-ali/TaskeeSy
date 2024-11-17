import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTask } from "../../api/taskApi";

import React from "react";

function DeleteBox({ setTasks, setSeletedTasks, seletedTasks = [] }) {
  // const [isDeletBoxDisabled, setIsDeletBoxDisabled] = useState(false);

  const handleOnClick = async () => {
    if (seletedTasks.length !== 1) {
      return;
    }
    console.log({ seletedTasks });
    const deletedData = await removeTasks(seletedTasks[0].id);
    setTasks((prev) => {
      const arr = [];
      for (let i = 0; i < prev.length; i++) {
        const e = prev[i];
        if (e.id !== seletedTasks[0].id) {
          arr.push(e);
        }
      }
      return arr;
    });
    setSeletedTasks([]);
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
        cursor: seletedTasks.length === 1 ? "pointer" : "not-allowed",
        "&:active": {
          color: seletedTasks.length === 1 ? "red" : "brown", // Color when clicked
          fontSize: seletedTasks.length === 1 ? 55 : 50,
        },
      }}
    />
  );
}

export default DeleteBox;
