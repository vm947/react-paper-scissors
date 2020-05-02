import React from "react";

const PaperButton = ({ name, onChange, playerPaper }) => {
  return (
    <button
      onClick={onChange}
      type="button"
      className={!playerPaper ? "btn btn-primary m-2" : "btn btn-danger m-2"}
    >
       Paper
    </button>
  );
};

export default PaperButton;
