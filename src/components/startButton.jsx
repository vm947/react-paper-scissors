import React from "react";

const StartButton = ({ startButton, onClick }) => {
  return (
    <button
      type="button"
      className="startButton btn btn-success btn-lg btn-block"
      onClick={onClick}
    >
      {startButton}
    </button>
  );
};

export default StartButton;
