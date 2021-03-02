import React, { useEffect } from "react";

const LocalStorage = () => {
  const [localData, setLocalData] = React.useState("");

  useEffect(() => {
    let ifPresent = localStorage.getItem("Info");
    if (ifPresent) setLocalData(ifPresent);
  }, []);

  const handleChange = (event) => {
    localStorage.setItem("Info", event.target.value);
    setLocalData(event.target.value);
  };

  const clearLocalData = () => {
    localStorage.removeItem("Info");
    setLocalData("");
  };

  /***
   *! Ref: https://www.codegrepper.com/code-examples/javascript/use+local+storage+in+react
   *! To add LocalStorage
   ** localStorage.setItem('myData', data);

   *! To get LocalStorage
   ** localStorage.getItem('myData');

   *! To Remove LocalStorage for particular element.
   ** localStorage.removeItem('myData');

   *! To remove all
   ** localStorage.clear();
   **
   */

  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "3px", fontStyle: "italic" }}
      >
        Local Storage Example...
      </h1>

      <div style={{ textAlign: "center" }} className="container mx-auto px-4">
        <textarea
          type="text"
          rows={4}
          cols={50}
          onChange={handleChange}
          style={{ backgroundColor: "greenyellow" }}
          value={localData}
        ></textarea>
        <br></br>
        {/* <p1>{localData}</p1> */}
        <button
          onClick={clearLocalData}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear Local Data
        </button>
      </div>
    </>
  );
};

export default LocalStorage;
