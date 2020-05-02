import React, { Component } from "react";
import PicBox from "./components/picBox";
import PlayerButton from "./components/playerButtons";
import ComputerButtons from "./components/computerButtons";
import StartButton from "./components/startButton";
import MiddleResult from "./components/middleResults";
import NavBar from "./components/navBar";
import imgRock from "./playerImgs/rock.jpg";
import imgReady from "./playerImgs/ready.jpg";
import imgScissors from "./playerImgs/scissors.jpg";
import imgPaper from "./playerImgs/paper.jpg";
import imgCompReady from "./compImgs/skynetlogo.jpg";
import imgCompRock from "./compImgs/compRock.jpg";
import imgCompPaper from "./compImgs/compPaper.jpg";
import imgCompScissors from "./compImgs/compScissors.jpg";
import "./App.css";

class App extends Component {
  state = {
    playerImg: imgReady,
    playerChoice: "",
    playerRock: "",
    playerPaper: "",
    playerScissors: "",
    computImg: imgCompReady,
    computChoice: "",
    compRock: "",
    compPaper: "",
    compScissors: "",
    startButton: "Start Game",
    middleResult: "",
    score: 50,
  };

  handleRock = () => {
    this.setState({
      playerChoice: "Rock",
      playerRock: "Rock",
      playerScissors: "",
      playerPaper: "",
      playerImg: imgRock,
      startButton: "Start Game",
    });
  };

  handlePaper = () => {
    this.setState({
      playerChoice: "Paper",
      playerPaper: "Paper",
      playerRock: "",
      playerScissors: "",
      playerImg: imgPaper,
      startButton: "Start Game",
    });
  };

  handleScissors = () => {
    this.setState({
      playerChoice: "Scissors",
      playerScissors: "Scissors",
      playerRock: "",
      playerPaper: "",
      playerImg: imgScissors,
      startButton: "Start Game",
    });
  };

  computComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
      this.setState({
        computImg: imgCompRock,
        computChoice: "Rock",
        compRock: "Rock",
        compPaper: "",
        compScissors: "",
      });
    } else if (choice == 1) {
      this.setState({
        computImg: imgCompPaper,
        computChoice: "Paper",
        compPaper: "Paper",
        compRock: "",
        compScissors: "",
      });
    } else {
      this.setState({
        computImg: imgCompScissors,
        computChoice: "Scissors",
        compScissors: "Scissors",
        compRock: "",
        compPaper: "",
      });
    }
    console.log(this.state);
  };

  chooseWinner = () => {
    const { playerChoice, computChoice } = this.state;
    if (
      (playerChoice === "Rock" && computChoice === "Scissors") ||
      (playerChoice === "Paper" && computChoice === "Rock") ||
      (playerChoice === "Scissors" && computChoice === "Paper")
    ) {
      let newScore = this.state.score;
      newScore += 5;
      this.setState({
        middleResult: "You Win!",
        playerChoice: "",
        computChoice: "",
        score: newScore,
      });
    } else if (
      (playerChoice === "Rock" && computChoice === "Paper") ||
      (playerChoice === "Paper" && computChoice === "Scissors") ||
      (playerChoice === "Scissors" && computChoice === "Rock")
    ) {
      let newScore = this.state.score;
      newScore -= 5;
      this.setState({
        middleResult: "You Lose",
        playerChoice: "",
        computChoice: "",
        score: newScore,
      });
    } else {
      let newScore = this.state.score;
      newScore -= 8;
      this.setState({
        middleResult: "It's a Tie!",
        playerChoice: "",
        computChoice: "",
        score: newScore,
      });
    }
  };

  countDown3 = () => {
    this.setState({ middleResult: 3 });
  };
  countDown2 = () => {
    this.setState({ middleResult: 2 });
  };
  countDown1 = () => {
    this.setState({ middleResult: 1 });
  };
  countDown0 = () => {
    this.setState({ middleResult: "Skynet is Choosing" });
  };

  startGame = () => {
    const { playerRock, playerPaper, playerScissors } = this.state;

    if (playerRock === "" && playerPaper === "" && playerScissors === "") {
      this.setState({ startButton: "Please Select Rock, Paper or Scissors" });
      return;
    } else {
      setTimeout(this.countDown3, 1000);
      setTimeout(this.countDown2, 2000);
      setTimeout(this.countDown1, 3000);
      setTimeout(this.countDown0, 4000);
      setTimeout(this.computComputerChoice, 5000);
      setTimeout(this.chooseWinner, 6000);
    }
  };

  handleNavColor = () => {
    const { score } = this.state;
    if (score > 85) {
      return "#c7229e";
    } else if (score > 80) {
      return "#bc22c7";
    } else if (score > 75) {
      return "#8b22c7";
    } else if (score >=70) {
      return "#3e22c7";
    } else if (score >= 65) {
      return "#2274c7";
    } else if (score >= 60) {
      return "#21afbf";
    } else if (score >= 55) {
      return "#21bf95";
    } else if (score >=50) {
      return "#21bf95";
    } else if (score >= 45) {
      return "##21bf78";
    } else if (score >=40){
      return "##21bf4b";
    } else if(score >=35){
      return "#53bf21"
    } else if (score >= 30) {
      return "#adbf21";
    } else if (score >=25){
      return "#ed900e";
    } else {
      return "#ed0e0e" 
    }
  };

  render() {
    const {
      computImg,
      compRock,
      compPaper,
      compScissors,
      playerImg,
      playerRock,
      playerPaper,
      playerScissors,
      startButton,
      middleResult,
      score,
    } = this.state;

    return (
      <div className="App">
        <NavBar middleResult={score} onScoreChange={this.handleNavColor} />
        <div className="big-container">
          <div className="container-div">
            <PicBox image={computImg} />
            <ComputerButtons
              compRock={compRock}
              compPaper={compPaper}
              compScissors={compScissors}
            />
          </div>
          <MiddleResult middleResult={middleResult} />
          <div className="container-div">
            <PicBox image={playerImg} />
            <PlayerButton
              onRockChange={this.handleRock}
              onPaperChange={this.handlePaper}
              onScissorsChange={this.handleScissors}
              playerRock={playerRock}
              playerPaper={playerPaper}
              playerScissors={playerScissors}
            />
          </div>
        </div>
        <StartButton startButton={startButton} onClick={this.startGame} />
      </div>
    );
  }
}

export default App;
