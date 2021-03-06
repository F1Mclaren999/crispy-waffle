import logo from "./logo.svg";
import React from "react";
import PropsObjectCreation from "./react-practice/PropsObjectCreation";
import SettingState from "./react-practice/SettingState";
import CallBackRef from "./react-practice/CallBackRef";
import CallBackRefHooks from "./react-practice/CallBackRefHooks";
import MultipleSetState from "./react-practice/MultipleSetState";
import MultipleSetStateHooks from "./react-practice/MultipleSetStateHooks";
import FileUploader from "./react-practice/FileUploader";
import ThemeContext from "./react-practice/ThemeContext";
import ContextExample from "./react-practice/ContextExample";
import FocusUsingRef from "./react-practice/FocusUsingRef";
import Drag from "./react-practice/Drag";
import BulletinIndex from "./bulletinBoard/BulletinIndex";
import LocalStorage from "./storageExamples/LocalStorageEx";
import SessionStorage from "./storageExamples/SessionStorageEx";
import CookieEx from "./storageExamples/CookeeEx";
import LifeCycle from "./lifeCycle/LifeCycle";
import PDF from "./pdf/PDF";
import PDFHooks from "./pdf/PDFHooks";

function lightChanger() {
  return "light";
}

function App() {
  //context functionality...

  return (
    <>
      {/* <PropsObjectCreation name={"ObjectStructure"} /> */}
      {/* <SettingState name={"aravind"} /> */}
      {/* <CallBackRef name={"callbackRef"} /> */}
      {/* <CallBackRefHooks name={"callbackRef"} /> */}
      {/* <MultipleSetState name={"callbackRef"} /> */}
      {/* <MultipleSetStateHooks name={"callbackRef"} /> */}
      {/* {<FileUploader />} */}
      {
        /** step 2: Creating a Provider...
         * example of the ThemeContext Provider...
         * example to pass function as a parameter to the Provider...**/
        // <ThemeContext.Provider value={lightChanger()}>
        //   <ContextExample />{" "}
        // </ThemeContext.Provider>
      }

      {/* {<FocusUsingRef />} */}

      {/* <div className="App" style={{ paddingLeft: "390px", marginTop: "100px" }}>
        <div className="w-full max-w-md bg-gray-800 text">
          <form
            action=""
            className=" bg-white shadow-md rounded-none px-9 py-9 pt-9"
          >
            <div className="px-4 pb-4">
              <label htmlFor="email" className="text-sm block font-bold  pb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                placeholder="Johnbull@example.com"
              />
            </div>
            <div className="px-4 pb-4">
              <label
                htmlFor="password"
                className="text-sm block font-bold pb-2"
              >
                PASSWORD
              </label>
              <input
                type="password"
                name="email"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div> */}

      {/* {<Drag />} */}
      {/* {<BulletinIndex />} */}
      {/* {<LocalStorage />} */}
      {/* {<SessionStorage />} */}
      {/* {<CookieEx />} */}
      {/* {<LifeCycle />} */}
      {/* {<PDF pdfFile={"./java-collections-cheat-sheet.pdf"} />} */}
      {<PDFHooks pdfFile={"./java-collections-cheat-sheet.pdf"} />}
    </>
  );
}

export default App;
