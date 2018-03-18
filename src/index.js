import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducers";
import "./assets/sass/index.css";
import App from "./App";
import Resultado from "./resultados";

let store = createStore(reducer);

function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store} />
      <hr />
      <Resultado store={store} />
    </div>,
    document.getElementById("root")
  );
}
store.subscribe(render);

render();
