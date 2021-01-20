import React, { useEffect } from "react";

const MultipleSetStateHooks = () => {
  const [colorCode, setColorCode] = React.useState(0);

  /***
   * * Even though if you call setState multiple times, it will not render multiple times...
   * * to improve the performance, it will schedule multiple invoke to single call and render it for performance.
   */

  useEffect(() => {
    setColorCode(colorCode + 1);
    setColorCode(colorCode + 1);
    setColorCode(colorCode + 1);
    setColorCode(colorCode + 1);
  }, []);

  return (
    <div style={{ color: "white" }}>
      {colorCode}
      {console.log("no of times component re-rendering...", colorCode)}
    </div>
  );
};

//if you use the lower case for the class, then it will throw error below one...
/**
 * ! The tag <multipleSetState> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
 * **/

export default MultipleSetStateHooks;
