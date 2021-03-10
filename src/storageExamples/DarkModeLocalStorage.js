// ** Ref https://aleksandarpopovic.com/Easy-Dark-Mode-Switch-with-React-and-localStorage/

import React from "react";
import "./DarkMode.css";

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    console.log("e.target value...", e);
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  //New thing...
  //classList
  //this is the read-only value that returns a live DOMTokenList collection of the class attributes of the element.

  //DOMTokenList representing the contents of the elements's class attribute. if the class attribute is not set or empty then it returns an empty DOMTokenList, ie length will be equal to 0.

  //DOMTokenList itself is read-only, although you can modify it using the add() and remove() methods.

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    ></button>
  );
};

const DarkModeLocalStorage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <DarkMode></DarkMode>
    </div>
  );
};

export default DarkModeLocalStorage;
