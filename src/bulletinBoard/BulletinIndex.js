import React, { useState, useEffect } from "react";

const BulletinIndex = () => {
  const [input, setInput] = useState(null);
  const [todo, setTodo] = useState(null);

  const onSubmit = (values) => {
    console.log(
      "🚀 ~ file: BulletinIndex.js ~ line 6 ~ onSubmit ~ values",
      values
    );

    console.log("typeof todo...", typeof todo);
  };

  return (
    <>
      <span>The Entered Lists are ; {input}</span>
      <div className="mx-96 m-60">
        {/* <ol>{todo.length > 0 ? todo.map((x) => <li>{x}</li>) : ""}</ol> */}
        <br></br>
        <input
          type="text"
          className="rounded text-black-500"
          onChange={(e) => setInput(e.target.value)}
          placeholder=" Enter Text"
          size={50}
          autoFocus
        ></input>{" "}
        <button
          type="button"
          className="px-2 rounded-md"
          style={{ color: "#EF4444", backgroundColor: "#FCA5A5" }}
        >
          Enter Text
        </button>
      </div>
    </>
  );
};

export default BulletinIndex;
