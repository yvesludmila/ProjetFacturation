import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Client from "./Components/ClientList/Client";

// import NavBar from "./Components/NavBar/NavBar";
// import Sider from "./Components/Sider/Sider";
// import Content from "./Components/Content/Content";
function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );

  // return (
  //   <div className="App">
  //
  //     {/* <NavBar />
  //     <Sider /> */}
  //     {/* <Content /> */}
  //   </div>
  // );
}

export default App;
