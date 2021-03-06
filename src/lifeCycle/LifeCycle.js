import React, { createRef } from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      `I am from getDerivedStateFromProps... props:${JSON.stringify(
        props
      )} -- state: ${JSON.stringify(state)}`,
      props
    );
    return null;
  }

  componentDidMount() {
    console.log("I am from componentDidMount...");
    this.x = setInterval(() => {
      const { counter } = this.state;
      this.setState({ counter: counter + 1 });
    }, 30000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `I am from ShouldComponentUpdate -> nextProps: ${JSON.stringify(
        nextProps
      )} - nextState- ${JSON.stringify(nextState)}`
    );
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps !== prevState) {
      console.log(
        `I am from getSnapshotBeforeUpdate -> prevProps: ${JSON.stringify(
          prevProps
        )} -prevState- ${JSON.stringify(prevState)}`
      );
      return prevState;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot != null) {
      console.log(
        `I am from componentDidUpdate... prevProps:${JSON.stringify(
          prevProps
        )} --prevState: ${JSON.stringify(
          prevState
        )} -- snapshot: ${JSON.stringify(snapshot)}`
      );
    }
  }

  componentWillUnmount() {
    //*** whatever cleanups have to be performed here... Otherwise memory leaks will happen...***/
    clearInterval(this.x);
    console.log("Finally Unmounting the component...");
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <p>No Of Times Component get Reloaded...{`${counter}`}</p>

        <div>
          <button>Stop Timer</button>
        </div>
      </div>
    );
  }
}

export default LifeCycle;

{
  /***
   *
   *
   ** I am from getDerivedStateFromProps... props:{} -- state: {"counter":1} {}
   ** I am from ShouldComponentUpdate -> nextProps: {} - nextState- {"counter":1}
   ** I am from getSnapshotBeforeUpdate -> prevProps: {} -prevState- {"counter":0}
   ** I am from componentDidUpdate... prevProps:{} --prevState: {"counter":0} -- snapshot: {"counter":0}
   ** I am from getDerivedStateFromProps... props:{} -- state: {"counter":2} {}
   ** I am from ShouldComponentUpdate -> nextProps: {} - nextState- {"counter":2}
   ** I am from getSnapshotBeforeUpdate -> prevProps: {} -prevState- {"counter":1}
   ** I am from componentDidUpdate... prevProps:{} --prevState: {"counter":1} -- snapshot: {"counter":1}
   ** I am from getDerivedStateFromProps... props:{} -- state: {"counter":3} {}
   ** I am from ShouldComponentUpdate -> nextProps: {} - nextState- {"counter":3}
   ** I am from getSnapshotBeforeUpdate -> prevProps: {} -prevState- {"counter":2}
   ** I am from componentDidUpdate... prevProps:{} --prevState: {"counter":2} -- snapshot: {"counter":2}
   ** I am from getDerivedStateFromProps... props:{} -- state: {"counter":4} {}
   ** I am from ShouldComponentUpdate -> nextProps: {} - nextState- {"counter":4}
   ** I am from getSnapshotBeforeUpdate -> prevProps: {} -prevState- {"counter":3}
   ** I am from componentDidUpdate... prevProps:{} --prevState: {"counter":3} -- snapshot: {"counter":3}
   */
}
