import React from "react";
import CompRockButton from "./compRockButton";
import CompPaperButton from "./compPaperButton";
import CompScissorsButton from "./compScissorsButton";

const ComputerButtons = ({ compRock, compPaper, compScissors}) => {
  return (
    <div className="button-div">
      <CompRockButton rock={compRock} />
      <CompPaperButton paper={compPaper} />
      <CompScissorsButton scissors={compScissors} />
    </div>
  );
};

export default ComputerButtons;
