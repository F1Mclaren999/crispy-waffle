import React, { useEffect, useMemo, useState } from "react";

const Memos = () => {
  const [counter, setCounter] = useState(0);
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(0);

  //expensive function
  const expensive = (a, b) => {
    setCounter(counter + 1);
    return a + b;
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setC(c + 1);

      if (c % 2 === 0) {
        setA(a + 1);
        setB(b + 1);
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [c]);

  //syntax of memos...
  const expensiveResult = useMemo(() => expensive(a, b), [a]);

  return (
    <div>
      <h1>Example of Memos</h1>
      <p>{`${expensiveResult} ---> Rerendered Count...${c}`}</p>
      <p>{`No of Times Executed Expensive function...${counter}`}</p>
    </div>
  );
};

export default Memos;
