import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Client from "../ClientList/Client";
import Facture from "../Facture/Facture";
import Article from "../Article/Article";
import Purchase from "../Purchase/Purchase";

import Order from "../Orders/Order";
import Projects from "../Projets/Projects";
import ProjectInProgress from "../Projets/ProjectInProgress";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Client" element={<Client />} />
      <Route path="/Facture" element={<Facture />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Article" element={<Article />} />
      <Route path="/Commande" element={<Order />} />
      <Route path="/Achat" element={<Purchase />} />
      <Route path="/En_cours" element={<ProjectInProgress />} />
    </Routes>
  );
};

export default AppRoutes;
