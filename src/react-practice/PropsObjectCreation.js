import React from "react";

export default class SettingState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Post Object Structure",
    };
  }

  //notes
  /*******
   * Basically, it will add the new property to the props object...
   *
   * Lets say if you are sending the props Obj to this component as an input, then it will add that to Prop object as  a property
   * props {
   *    name : "...whatever..."
   *  }
   *
   */

  render() {
    console.log("Post Object Structure", this.state.name);
    return <div>Props Object Structure - {this.props.name}</div>;
  }
}
