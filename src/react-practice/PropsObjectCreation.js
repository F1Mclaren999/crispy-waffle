import React from "react";

export default class SettingState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Post Object Structure",
    };
  }

  render() {
    console.log("Post Object Structure", this.state.name);
    return <div>Props Object Structure - {this.props.name}</div>;
  }
}
