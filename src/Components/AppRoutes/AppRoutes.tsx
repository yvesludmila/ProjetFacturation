import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Client from "../ClientList/Client";
import Facture from "../Facture/Facture";
import Article from "../Article/Article";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Client" element={<Client />} />
      <Route path="/Facture" element={<Facture />} />
      <Route path="/Article" element={<Article />} />
    </Routes>
  );
};

export default AppRoutes;
