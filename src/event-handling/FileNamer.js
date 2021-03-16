import React, { useEffect, useState } from "react";

/****
 * Ref : https://www.digitalocean.com/community/tutorials/how-to-handle-dom-and-window-events-with-react
 *
 */

const FileNamer = () => {
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);

  //first time I have seen method in dependencies of useEffect...
  /****
   * adding an global event and removing an event and to avoid memory leak added a login in useEffect...
   * Basically every time we will add the listener to the dom element. this is not like a dom element. we are adding it globally...
   * When you move/click out of that component, this will cleared from the memory...
   */
  useEffect(() => {
    const handleWindowClick = () => setAlert(false);
    if (alert) {
      window.addEventListener("click", handleWindowClick);
    } else {
      window.removeEventListener("click", handleWindowClick);
    }

    return () => {
      window.removeEventListener("click", handleWindowClick);
      console.log("I am unmounted from the component...");
    };
  }, [alert, setAlert]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const validate = (event) => {
    console.log("validation needs to be added...", event);
    setAlert(true);
    event.preventDefault();
  };
  return (
    <div
      style={{
        border: "2px",
        borderStyle: "solid",
        margin: "5px",
        height: "500px",
      }}
    >
      <p
        style={{
          border: "2px",
          borderStyle: "solid",
          margin: "10px",
        }}
      >
        {" "}
        Preview :{input}
      </p>
      <form>
        <input
          type="text"
          onChange={handleChange}
          //   onFocus={() => setAlert(true)}
          //   onBlur={() => setAlert(false)}
          value={input}
          style={{ margin: "10px" }}
        ></input>
        <div>
          {alert && <span style={{ color: "red" }}>* is not allowed</span>}
          <br></br>
          <br></br>
          <button
            type="submit"
            onClick={validate}
            // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{ margin: "10px" }}
          >
            More Information
          </button>

          {alert && (
            <div
              style={{
                position: "absolute",
                background: "white",
                border: "1px darkgrey solid",
                padding: "10px",
                top: "-70px",
                left: 0,
              }}
            >
              <span style={{ color: "green" }}>
                Alpha numeric characters allowed
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FileNamer;
