import logo from "./logo.svg";
import "./App.css";
import React from "react";
import PropsObjectCreation from "./react-practice/PropsObjectCreation";
import SettingState from "./react-practice/SettingState";
import CallBackRef from "./react-practice/CallBackRef";
import CallBackRefHooks from "./react-practice/CallBackRefHooks";
import MultipleSetState from "./react-practice/MultipleSetState";
import MultipleSetStateHooks from "./react-practice/MultipleSetStateHooks";
import FileUploader from "./react-practice/FileUploader";
import ThemeContext from "./react-practice/ThemeContext";
import ContextExample from "./react-practice/ContextExample";

function lightChanger() {
  return "light";
}

function App() {
  //context functionality...

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <PropsObjectCreation name={"ObjectStructure"} /> */}
        {/* <SettingState name={"aravind"} /> */}

        {/* <CallBackRef name={"callbackRef"} /> */}
        {/* <CallBackRefHooks name={"callbackRef"} /> */}
        {/* <MultipleSetState name={"callbackRef"} /> */}
        {/* <MultipleSetStateHooks name={"callbackRef"} /> */}
        {/* {<FileUploader />} */}
        {
          /** step 2: Creating a Provider...
           * example of the ThemeContext Provider...
           * example to pass function as a parameter to the Provider...**/
          <ThemeContext.Provider value={lightChanger()}>
            <ContextExample />{" "}
          </ThemeContext.Provider>
        }
      </header>
    </div>
  );
}

export default App;
