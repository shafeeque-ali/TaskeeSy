import React from "react";
import ListTasks from "./components/ListTasks/ListTasks";
import NewTaskContainer from "./components/newTask/NewTaskContainer";
import FloatingActionButtons from "../reusables/FloatingButton";
import ChangerContainer from "./components/statusChanger/ChangerContainer";
import DeleteBox from "../../assets/icons/DeleteBox";

function ContentContainer() {
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
          backgroundColor: "#EF7E4B",
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
