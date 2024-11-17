import React, { useState, useEffect } from "react";
import ListTasks from "./components/ListTasks/ListTasks";
import NewTaskContainer from "./components/newTask/NewTaskContainer";
import ChangerContainer from "./components/statusChanger/ChangerContainer";
import DeleteBox from "../../assets/icons/DeleteBox";
import { getAllTaks } from "../../api/taskApi";

function ContentContainer() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const response = await getAllTaks();
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response;
      console.log({data});
      
      setTasks(data);
    } catch (err) {
      // setError(err.message);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      {console.log({ tasks })}
      <div
        style={{
          flexGrow: 1,
          // backgroundColor: "#EF7E4B",
          // backgroundColor: "turquoise",
          display: "flex",
          justifyContent: "center",
          overflow: "scroll",
          height: "20rem",
          scrollbarWidth: "none",
        }}
      >
        <ListTasks />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4rem",
          left: "1rem",
        }}
      >
        <ChangerContainer />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4rem",
          right: "1rem",
        }}
      >
        <DeleteBox />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "4rem",
        }}
      >
        <NewTaskContainer />
      </div>
      {/* <FloatingActionButtons /> */}
    </div>
  );
}

export default ContentContainer;
