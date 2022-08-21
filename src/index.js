import ReactDOM from "react-dom"
import App from "./App"
import React from "react";
import "./index.css"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
    , document.querySelector("#root")
)