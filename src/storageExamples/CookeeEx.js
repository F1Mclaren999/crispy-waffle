import React, { useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import CookieRecieve from "./CookieRecieve";

const CookeeEx = () => {
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res)
      .then((data) => {
        console.log("data...", data);
        // setCookie(data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <h1>...Cookie Example...</h1>

      <CookiesProvider>
        <CookieRecieve />
      </CookiesProvider>
    </>
  );
};

export default CookeeEx;
