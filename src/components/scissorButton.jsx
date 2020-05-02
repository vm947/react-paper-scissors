import React from "react";

const ScissorButton = ({ name, onChange, playerScissors }) => {
  return (
    <button
      onClick={onChange}
      type="button"
      className={
        !playerScissors ? "btn btn-primary m-2" : "btn btn-danger m-2"
      }
    >
      Scissors
    </button>
  );
};

export default ScissorButton;
