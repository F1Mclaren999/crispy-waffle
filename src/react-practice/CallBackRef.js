import React from "react";

export default class CallBackRef extends React.Component {
  constructor(props) {
    super();
    this.inputField = React.createRef();
    this.state = {
      isUpper: false,
      result: "",
    };
  }

  /***
   * If you dont use super(), then it will prompt the following error...
   *
   * ×ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
   *
   * to access the value of the useRef -> you have to use -> this.inputField.current.value (for this example...)
   *
   */

  toggleInputCase = () => {
    const isUpper = this.state.isUpper;

    //to access the value from DOM
    const value = this.inputField.current.value;

    if (value) {
      this.inputField.current.value = isUpper
        ? value.toLowerCase()
        : value.toUpperCase();

      let updatedValue = isUpper ? value.toLowerCase() : value.toUpperCase();

      this.setState({
        isUpper: !isUpper,
        result: updatedValue,
      });
    }
  };

  render() {
    return (
      <>
        <h1>
          Hellow CallBackRef Example with Input - {`${this.state.result}`}
        </h1>
        <input
          type="text"
          style={{ backgroundColor: "white", color: "black" }}
          ref={this.inputField}
        />
        <button type="button" onClick={this.toggleInputCase}>
          Toggle Case
        </button>
      </>
    );
  }
}
