import React from "react";

const NavBar = ({ middleResult, onScoreChange }) => {
  return (
  <nav className="nav-bar navbar navbar-light" style={{backgroundColor: onScoreChange()}}>
      <h1 className="navbar-brand">Your Score is : {middleResult}</h1>
    </nav>
  );
};

export default NavBar;
