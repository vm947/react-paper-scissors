import React from "react";

const CompScissorsButton = ({ scissors }) => {
  return (
    <button
      type="button"
      className={!scissors ? "btn btn-primary m-2" : "btn btn-danger m-2"}
    >
      Scissors
    </button>
  );
};

export default CompScissorsButton;