import React, { useState } from "react";
import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import { addTask, updateTask } from "../../../../../api/taskApi";
import CloseIcon from "@mui/icons-material/Close";

function NewTask({
  setTasks,
  setIsOpenNew,
  seletedTasks = [],
  setSeletedTasks,
}) {
  let intitalFormdata =
    seletedTasks.length === 1
      ? seletedTasks[0]
      : { title: "", description: "" };
  const [formData, setFormData] = useState(intitalFormdata);
  const [error, setError] = useState({ title: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "title" && value.trim()) {
      setError((prev) => ({ ...prev, title: false }));
    }
  };

  const handleSubmit = async (e) => {
    const isUpdatedMode = seletedTasks[0] ? true : false;
    e.preventDefault();
    if (!formData.title.trim()) {
      setError((prev) => ({ ...prev, title: true }));
      return;
    }

    const uploadedData = isUpdatedMode
      ? await editTasks(seletedTasks[0].id, formData)
      : await uploadTasks(formData);
    console.log("Form Submitted", uploadedData);

    setTasks((prev) => {
      if (!isUpdatedMode) {
        setFormData({ title: "", description: "" });
        return [uploadedData, ...prev];
      }

      for (let i = 0; i < prev.length; i++) {
        const e = prev[i];
        if (e.id === uploadedData.id) {
          e.title = uploadedData.title;
          e.description = uploadedData.description;
          e.status = uploadedData.status;
        }
      }
      return [...prev];
    });

    // Clear the form
    // setFormData({ title: "", description: "" });
    // setSeletedTasks([]);
  };

  async function uploadTasks(formData) {
    try {
      const response = await addTask(formData);
      if (response.statusText !== "Created") {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.data;
    } catch (err) {
      // setError(err.message);
    }
  }

  async function editTasks(id, formData) {
    try {
      const response = await updateTask(id, formData);
      console.log("update-");
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        minWidth: "50ch",
        margin: "0 auto",
        mt: 5,
      }}
    >
      <Stack direction="row" sx={{ width: "100%" }}>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          error={error.title}
          helperText={error.title ? "Title is required" : ""}
          variant="standard"
          required
          sx={{ width: "100%" }}
        />
        <Stack
          onClick={() => setIsOpenNew(false)} // Handle click event
          sx={{
            backgroundColor: "black",
            justifyContent: "center",
            padding: "0.5rem",
            borderTopRightRadius: "0.3rem",
            cursor: "pointer",
          }}
        >
          <CloseIcon sx={{ color: "white" }} />
        </Stack>
      </Stack>
      {/* <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        error={error.title}
        helperText={error.title ? "Title is required" : ""}
        variant="standard"
        required
      /> */}

      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        variant="standard"
        multiline
        rows={3}
      />

      <Button type="submit" variant="contained" color="primary">
        {seletedTasks[0] ? "Update" : "Add"}
      </Button>
    </Box>
  );
}

export default NewTask;
