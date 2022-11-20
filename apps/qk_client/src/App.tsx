import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/micro-app1">micro-app1应用</Link>
        <br />
        <Link to="/micro-app2">micro-app2应用</Link>
      </Router>
      {/* 切换导航将微应用渲染到container容器中 */}
      <div id="container"></div>
    </div>
  );
}

export default App;
