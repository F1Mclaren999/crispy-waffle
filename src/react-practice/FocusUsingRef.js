import React from "react";

export default class FocusUsingRef extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input1: "",
      input2: "",
    };
  }

  /***
   * first check whether the this.textInput.current is present or not, then use focus() (which is a js lib)
   *
   * */
  componentDidMount() {
    if (this.textInput.current) {
      this.textInput.current.focus();
    }
  }

  handleChange(event) {
    this.setState({ textInput: event.target.value });
  }

  onSubmit(e) {
    console.log(
      "🚀 ~ file: FocusUsingRef.js ~ line 17 ~ FocusUsingRef ~ onSubmit ~ values",
      this.state
    );
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input defaultValue="Focus doesn't work here"></input>
          <input
            ref={this.textInput}
            defaultValue="Focus works here"
            onChange={this.handleChange}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
