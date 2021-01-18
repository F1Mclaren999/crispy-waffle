import React from "react";

export default class SettingState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Aravind",
    };
  }

  componentDidMount() {
    console.log("Step 1", this.state.name);
    //updating the state without setState -> Component re-render wont happen...
    this.state.name = "Bingo-will not render it...";
    console.log("Step 2", this.state.name);
    //updating the state with setState vs simply setting the object...
    this.setState({ name: "Aravind Updated..." });
    console.log("Step 3", this.state.name);
  }

  render() {
    console.log("Render", this.state.name);
    return (
      <div>
        <h1>Props from local State {this.state.name}</h1>
      </div>
    );
  }
}
