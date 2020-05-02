import React from "react";
import ScissorButton from "./scissorButton";
import PaperButton from "./paperButton";
import RockButton from "./rockButton";

const PlayerButton = ({
  playerRock,
  playerPaper,
  playerScissors,
  onRockChange,
  onPaperChange,
  onScissorsChange,
}) => {
    
  return (
    <div className="button-div">
      <RockButton playerRock={playerRock} onChange={onRockChange} />
      <PaperButton playerPaper={playerPaper} onChange={onPaperChange} />
      <ScissorButton
        playerScissors={playerScissors}
        onChange={onScissorsChange}
      />
    </div>
  );
};

export default PlayerButton;
