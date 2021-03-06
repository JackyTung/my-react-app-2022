import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";

import About from "@/containers/About/index.jsx";
import Home from "@/containers/Home/index.jsx";
import configureStore from "@/redux/rootStore";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
