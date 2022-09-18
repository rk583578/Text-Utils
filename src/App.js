import "./App.css";
import NavScrollExample from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
import { useState } from "react";
import AlertDismissibleExample from "./component/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const modeChanger = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
    }
  };

  return (
    <Router>
      <NavScrollExample mode={mode} modeChanger={modeChanger} />
      <AlertDismissibleExample alert={alert} />

      <div className="container my-3 text-center">
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
