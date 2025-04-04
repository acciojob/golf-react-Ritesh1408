import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true }); 
  }

  handleKeyPress(event) {
    if (event.keyCode === 39) {
      // Right Arrow key (keyCode: 39)
      this.setState((prevState) => ({
        ballPosition: {
          left: `${parseInt(prevState.ballPosition.left) + 5}px`,
        },
      }));
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
