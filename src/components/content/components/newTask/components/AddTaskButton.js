import React from "react";
import FloatingActionButtons from "../../../../reusables/FloatingButton";

function AddTaskButton({ onClick, type }) {
  return (
    <div onClick={onClick}>
      <FloatingActionButtons  type={type} />
    </div>
  );
}

export default AddTaskButton;
