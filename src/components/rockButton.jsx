import React from "react";

const RockButton = ({ name, onChange, playerRock }) => {
  return (
    <button
      onClick={onChange}
      type="button"
      className={!playerRock ? "btn btn-primary m-2" : "btn btn-danger m-2"}
    >
      Rock
    </button>
  );
};

export default RockButton;
