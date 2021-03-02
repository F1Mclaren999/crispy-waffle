import React, { useEffect } from "react";

const LocalStorage = () => {
  const [sessionData, setSessionData] = React.useState("");

  useEffect(() => {
    let ifPresent = sessionStorage.getItem("Info");
    if (ifPresent) setSessionData(ifPresent);
  }, []);

  const handleChange = (event) => {
    sessionStorage.setItem("Info", event.target.value);
    setSessionData(event.target.value);
  };

  const clearSessionData = () => {
    sessionStorage.removeItem("Info");
    setSessionData("");
  };

  /***
   *!The sessionStorage object stores data for only one session (the data is deleted when the browser tab is closed).
   
   *! To add SessionStorage
   ** sessionStorage.setItem('key', data);

   *! To getSessionlStorage
   ** sessionStorage.getItem('key');

   *! To Remove SessionStorage for particular element.
   ** sessionStorage.removeItem('key');

   *! To remove all
   ** localStorage.clear();
   **
   */

  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "3px", fontStyle: "italic" }}
      >
        session Storage Example...
      </h1>

      <div style={{ textAlign: "center" }} className="container mx-auto px-7">
        <textarea
          type="text"
          rows={4}
          cols={50}
          onChange={handleChange}
          style={{ backgroundColor: "greenyellow" }}
          value={sessionData}
        ></textarea>
        <br></br>
        <p1>{sessionData}</p1>
        <br></br>
        <button
          onClick={clearSessionData}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear session Data
        </button>
      </div>
    </>
  );
};

export default LocalStorage;
