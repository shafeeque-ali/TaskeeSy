import React from "react";
import FloatingActionButtons from "../../../../reusables/FloatingButton";

function AddTaskButton({ onClick }) {
  return (
    <div onClick={onClick}>
      <FloatingActionButtons />
    </div>
  );
}

export default AddTaskButton;
