import React from "react";

const CompPaperButton = ({ paper }) => {
  return (
    <button
      type="button"
      className={!paper ? "btn btn-primary m-2" : "btn btn-danger m-2"}
    >
      Paper
    </button>
  );
};

export default CompPaperButton;