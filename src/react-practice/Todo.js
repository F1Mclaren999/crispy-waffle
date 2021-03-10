import React, { useEffect } from "react";

const Todo = () => {
  const [fieldValue, setFieldValue] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  const submit = () => {
    setTodo((todo) => [...todo, fieldValue]);
    setFieldValue("");
  };

  const addTodo = () => {
    submit();
  };

  const handleKeyPress = (e) => {
    console.log("🚀 ~ file: Todo.js ~ line 22 ~ handleKeyPress ~ e", e);

    if (e.charCode === 13) {
      console.log("I am going in ...");
      addTodo();
    }
  };

  useEffect(() => {}, [todo]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="bg-blue-500 text-white font-bold">Todo List</h1>
      <br></br>
      <input
        type="text"
        onChange={(e) => {
          setFieldValue(e.target.value);
        }}
        onKeyPress={handleKeyPress}
        value={fieldValue}
        placeholder="Add Todos"
      ></input>
      <div>
        {todo.length > 0
          ? todo.map((e, index) => <li key={index}>{e}</li>)
          : ""}
      </div>
      <br></br>
      <button
        type="submit"
        onClick={addTodo}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Todo
      </button>{" "}
      <button
        type="reset"
        onClick={() => {
          setTodo([]);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Reset Todo
      </button>
    </div>
  );
};

export default Todo;
