import "./App.css";

import React from "react";
import { Provider } from "react-redux";

import Home from "@/containers/Home/index.jsx";
import configureStore from "@/redux/rootStore";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
