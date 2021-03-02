import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
function CookieRecieve() {
  const [cookies, setCookie, removeCookie] = useCookies(["LastVisit"]);

  function handleCookie(newName) {
    let d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    setCookie("LastVisit", newName, {
      path: "/",
      expires: d,
    });
  }

  function clearCookie() {
    removeCookie("LastVisit");
  }

  useEffect(() => {
    console.log("cookies... from Cookie Recieve...", cookies.LastVisit);
  }, [cookies]);

  return (
    <div>
      Cookies are as follows {cookies && <h1>Hello {cookies.LastVisit}!</h1>}
      <button
        onClick={() => {
          handleCookie("today...");
        }}
      >
        Set Cookie
      </button>
      <button onClick={() => clearCookie()} style={{ paddingLeft: "10px" }}>
        Clear Cookie
      </button>
    </div>
  );
}

export default CookieRecieve;
