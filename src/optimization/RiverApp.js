import React, { useEffect, useReducer, useState, lazy, Suspense } from "react";
const RiverInfomation = lazy(() =>
  import(/* webpackChunkName: "RiverInformation" */ "./RiverInfomation")
);

/****
 * Ref:https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react?
 */

export default function RiverApp() {
  const [river, setRiver] = useState("nile");
  const [show, toggle] = useReducer((state) => !state, true);

  const riverHandler = (name) => {
    setRiver(name);
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <h1>River {river.toUpperCase()}</h1>
      <div>
        <ol>
          <li
            onClick={() => riverHandler("nile")}
            style={{ display: "inline-block", fontWeight: "bold" }}
          >
            Nile
          </li>
          <li
            onClick={() => riverHandler("niagra")}
            style={{
              display: "inline-block",
              paddingLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Niagra
          </li>
          <li
            onClick={() => riverHandler("amazon")}
            style={{
              display: "inline-block",
              paddingLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Amazon
          </li>
          <li
            onClick={() => riverHandler("mississippi")}
            style={{
              display: "inline-block",
              paddingLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Mississippi
          </li>
        </ol>
      </div>
      <div>
        <button
          onClick={toggle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Toggle
        </button>
      </div>
      <Suspense
        fallback={
          <div style={{ backgroundColor: "green" }}>Loading Component</div>
        }
      >
        {show && <RiverInfomation river={river} />}
      </Suspense>
    </div>
  );
}
