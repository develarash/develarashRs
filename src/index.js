import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import Cookies from "js-cookie";
// import {  } from "./Components/dashboard/login";

// axios.defaults.withCredentials = true;
// axios.defaults.headers.common["Authorization"] = Cookies.gat("usert");
// const token = Cookies.get("usert");
// axios.defaults.headers["Authorization"] = `Bearer ${token}`;
// axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
// axios.defaults.headers.delete['Authorization'] = `Bearer ${token}`;
// axios.defaults.headers.patch['Authorization'] = `Bearer ${token}`;
// axios.defaults.headers.put['Authorization'] = `Bearer ${token}`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
);
