import React, { useState, useEffect } from "react";
import ListTasks from "./components/ListTasks/ListTasks";
import NewTaskContainer from "./components/newTask/NewTaskContainer";
import StatusChangerContainer from "./components/statusChanger/StatusChangerContainer";
import DeleteBox from "../../assets/icons/DeleteBox";
import { getAllTaks } from "../../api/taskApi";

function ContentContainer({ filter }) {
  const [tasks, setTasks] = useState([]);
  // const [seletedTasks, setSeletedTasks] = useState([]);

  const selectedTaskees = () => tasks.filter((e) => e.isSelected === true);

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  async function fetchTasks() {
    try {
      const response =
        filter === "all" ? await getAllTaks() : await getAllTaks(filter);
      console.log({ response });

      if (response.statusText !== "OK") {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      // console.log({ response });
      let arr = [];
      for (let i = 0; i < response.data.length; i++) {
        const e = response.data[i];
        e.isSelected = false;
        arr.push(e);
      }
      setTasks(arr);
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
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          overflow: "scroll",
          height: "20rem",
          scrollbarWidth: "none",
        }}
      >
        <ListTasks setTasks={setTasks} tasks={tasks} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4rem",
          left: "1rem",
        }}
      >
        <StatusChangerContainer setTasks={setTasks} tasks={tasks} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4rem",
          right: "1rem",
        }}
      >
        <DeleteBox tasks={tasks} setTasks={setTasks} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "4rem",
        }}
      >
        <NewTaskContainer
          floatingButtonType={
            selectedTaskees().length === 0
              ? "add"
              : selectedTaskees().length === 1
              ? "edit"
              : selectedTaskees().length < 1 && "disabled"
          }
          setTasks={setTasks}
          tasks={tasks}
        />
      </div>
      {/* <FloatingActionButtons /> */}
    </div>
  );
}

export default ContentContainer;
