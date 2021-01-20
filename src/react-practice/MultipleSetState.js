import React from "react";

class MultipleSetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorCode: 0,
    };
  }

  componentDidMount() {
    //setting multiple times...

    /***
     * * Even though if you call setState multiple times, it will not render multiple times...
     * * to improve the performance, it will schedule multiple invoke to single call and render it for performance.
     */
    this.setState((prevState, props) => ({
      colorCode: prevState.colorCode + 1,
    }));
    this.setState((prevState, props) => ({
      colorCode: prevState.colorCode + 1,
    }));
    this.setState((prevState, props) => ({
      colorCode: prevState.colorCode + 1,
    }));
    this.setState((prevState, props) => ({
      colorCode: prevState.colorCode + 1,
    }));
  }

  render() {
    const { colorCode } = this.state;
    console.log("no of times getting invoked in Render...", colorCode);
    return <div style={{ color: "white" }}>{colorCode}</div>;
  }
}

//if you use the lower case for the class, then it will throw error below one...
/**
 * ! The tag <multipleSetState> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
 * **/

export default MultipleSetState;
