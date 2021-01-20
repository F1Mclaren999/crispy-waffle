import React from "react";

const CallBackRefHooks = (props) => {
  const [isUpper, setIsUpper] = React.useState(false);
  const [result, setResult] = React.useState("");
  const inputField = React.useRef();

  const toggleInputCase = () => {
    //to access the value from DOM
    const value = inputField.current.value;

    if (value) {
      inputField.current.value = isUpper
        ? value.toLowerCase()
        : value.toUpperCase();

      let updatedValue = isUpper ? value.toLowerCase() : value.toUpperCase();

      setIsUpper(!isUpper);
      setResult(updatedValue);
    }
  };

  return (
    <>
      <h1>Hellow CallBackRef Example with Input - {`${result}`}</h1>
      <input
        type="text"
        style={{ backgroundColor: "white", color: "black" }}
        ref={inputField}
      />
      <button type="button" onClick={toggleInputCase}>
        Toggle Case
      </button>
    </>
  );
};

export default CallBackRefHooks;
