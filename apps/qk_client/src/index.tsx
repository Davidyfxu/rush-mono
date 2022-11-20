import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerMicroApps, start } from "qiankun";
registerMicroApps([
  {
    name: "react app1", // app name registered
    entry: "//localhost:3011",
    container: "#micro-app1",
    activeRule: "/micro-app1",
  },
  {
    name: "react app2", // app name registered
    entry: "//localhost:3012",
    container: "#micro-app2",
    activeRule: "/micro-app2",
  },
]);
// 调用start用于启动子应用
start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
