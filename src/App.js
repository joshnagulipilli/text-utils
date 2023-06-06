import "./App.css";
import Alert from "./components/Alert.mjs";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has enabled", "success");
      document.title = "Text utils  Dark-mode";
      // setInterval(()=>
      // {
      //   document.title="installing"
      // },1000);
      // setInterval(()=>
      // {
      //   document.title="utilize"
      // },500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success");
      document.title = "Text utils  Light-mode";
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <Router>
      <Navbar Title="React" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <Routes>
        <Route exact path="/" element={ <TextForm heading="Text-Utils - Word Counter , Character Counter , Remove Extra Space"  mode={mode}  showAlert={showAlert}  /> }/>
        <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}
