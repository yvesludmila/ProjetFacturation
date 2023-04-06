import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Sider from "./Components/Sider/Sider";
// import Content from "./Components/Content/Content";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Sider />
      {/* <Content /> */}
    </div>
  );
}

export default App;
