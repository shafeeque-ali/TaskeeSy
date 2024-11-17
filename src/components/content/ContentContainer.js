import React, { useState, useEffect } from "react";
import ListTasks from "./components/ListTasks/ListTasks";
import NewTaskContainer from "./components/newTask/NewTaskContainer";
import StatusChangerContainer from "./components/statusChanger/StatusChangerContainer";
import DeleteBox from "../../assets/icons/DeleteBox";
import { getAllTaks } from "../../api/taskApi";

function ContentContainer({ filter }) {
  const [tasks, setTasks] = useState([]);
  // const [seletedTasks, setSeletedTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const handleSelectedTask = (checked, task) => {
    console.log({ checked, task });

    let arr = [];
    for (let i = 0; i < tasks.length; i++) {
      const e = tasks[i];
      if (e.id === task.id) {
        e.isSelected = checked;
      }
      arr.push(e);
    }
    setTasks(arr);

    // if (checked) {
    //   setSeletedTasks((preves) => [task, ...preves]);
    // } else {
    //   const arr = [];
    //   for (let i = 0; i < seletedTasks.length; i++) {
    //     const element = seletedTasks[i];
    //     if (element.id !== task.id) {
    //       arr.push(element);
    //     }
    //   }
    //   setSeletedTasks(arr);
    // }
  };

  // const seletedTasks = () => tasks.filter((e) => e.isSelected === true);

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
        arr.push(arr);
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
        <ListTasks setSeletedTasks={handleSelectedTask} tasks={tasks} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4rem",
          left: "1rem",
        }}
      >
        <StatusChangerContainer
          setTasks={setTasks}
          seletedTasks={seletedTasks}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4rem",
          right: "1rem",
        }}
      >
        <DeleteBox
          setSeletedTasks={setSeletedTasks}
          setTasks={setTasks}
          seletedTasks={seletedTasks}
        />
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
            seletedTasks().length === 0
              ? "add"
              : seletedTasks().length === 1
              ? "edit"
              : seletedTasks().length < 1 && "disabled"
          }
          setTasks={setTasks}
          seletedTasks={seletedTasks}
          setSeletedTasks={setSeletedTasks}
        />
      </div>
      {/* <FloatingActionButtons /> */}
    </div>
  );
}

export default ContentContainer;
