import React from "react";

const CompRockButton = ({ rock }) => {
  return (
    <button
      type="button"
      className={!rock ? "btn btn-primary m-2" : "btn btn-danger m-2"}
    >
      Rock
    </button>
  );
};

export default CompRockButton;