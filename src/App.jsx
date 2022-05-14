import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Ahmed Belkhiria",
      bio: "Student in Dauphine",
      imgSrc: "/profile.png",
      profession: "MERN Stack developer",
      show: false,
    };
  }
  componentDidMount() {
    console.log("mounted");
  }
  render() {
    const showState = () => {
      this.setState({
        show: !this.state.show,
      });
    };

    return (
      <>
        <div className="wrapper">
          <div className="image">
            <img src={this.state.show && this.state.imgSrc} />
          </div>
          <div className="text">
            <h2>{this.state.show && this.state.fullName}</h2>
            <p>{this.state.show && this.state.bio}</p>
            <p>{this.state.show && this.state.profession}</p>
          </div>
        </div>
        <div className="show">
          <button onClick={showState}>Show Profile</button>
        </div>
      </>
    );
  }
}

export default App;
