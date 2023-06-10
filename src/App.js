// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import "./CSS/Style.scss";
import React from "react";
import ProductView from "./Components/ProductView";
import Home from "./Components/HomePage";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let [validator, setValidator] = useState({});
  let [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  const [mode, setmode] = useState("light");
  const [msg, setmsg] = useState("Enable Dark Mode");
  const [response, setResponse] = useState(false);

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      // document.body.style.backgroundColor = "grey";
      setmsg("Enable light mode");
    } else {
      setmode("light");

      setmsg("Enable dark mode");
    }
  };

  return (
    <Router>
      <div
        className="body"
        style={{
          backgroundColor: mode === "light" ? "white" : "#373b3e",
        }}
      >
        <Navbar
          title="EMAIL-VERIFICATION"
          mode={mode}
          togglemode={togglemode}
          msg={msg}
        ></Navbar>
        <div
          className="body"
          id="view"
          // style={{ backgroundColor: mode === "light" ? "azure" : "grey" }}
        >
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  mode={mode}
                  loading={loading}
                  validator={validator}
                  setLoading={setLoading}
                  setValidator={setValidator}
                  response={response}
                  setResponse={setResponse}
                  post={post}
                  setPost={setPost}
                ></Home>
              }
            ></Route>

            <Route
              exact
              path="/ProductView"
              element={
                <ProductView
                  loading={loading}
                  validator={validator}
                  mode={mode}
                  response={response}
                  setResponse={setResponse}
                  post={post}
                  setPost={setPost}
                ></ProductView>
              }
            ></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
