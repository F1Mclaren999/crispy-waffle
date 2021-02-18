import React from "react";
import ThemeContext from "./ThemeContext";

const ContextExample = () => {
  /**
   * Step 3 : Creating a consumer for recieving the data from the Provider
   * closest provider's value will be take into effect...
   * if uncomment the below line, then ThemeContext value will be "Oh Shit"
   */
  //   const ThemeContext = React.createContext("Oh Shit");
  return (
    <>
      <ThemeContext.Consumer>
        {(value) => <span>Oh {value}!</span>}
      </ThemeContext.Consumer>
    </>
  );
};

export default ContextExample;
