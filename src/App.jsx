import React from "react";
import { Layout, Menu } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

import "./App.css";
import EventsPage from "./pages/EventsPage";
import FunnelPage from "./pages/FunnelPage";
import ConfigPage from "./pages/ConfigPage";
import HelpPage from "./pages/HelpPage";

const { Header, Content } = Layout;

const urlOf = (page) => `/flowboard/${page}`;

const menuItems = [
  { key: "1", label: <Link to={urlOf("events")}>Events</Link> },
  { key: "2", label: <Link to={urlOf("funnel")}>Funnel</Link> },
  { key: "3", label: <Link to={urlOf("config")}>Config</Link> },
  { key: "4", label: <Link to={urlOf("help")}>Help</Link> },
];

const App = () => (
  <Router>
    <Layout style={{ height: "100vh" }}>
      <Header className="header">
        <div className="logo">
          <img
            src={urlOf("BasisTech.png")}
            alt="BasisTech Logo"
            style={{ height: "31px", margin: "16px 24px 16px 0" }}
          />
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={["3"]} items={menuItems} />
      </Header>
      <Content style={{ marginTop: 64, padding: "0 24px", background: "#fff" }}>
        <Routes>
          <Route
            path={urlOf("")}
            element={<Navigate to="/flowboard/config" />}
          />
          <Route path={urlOf("events")} element={<EventsPage />} />
          <Route path={urlOf("funnel")} element={<FunnelPage />} />
          <Route path={urlOf("config")} element={<ConfigPage />} />
          <Route path={urlOf("help")} element={<HelpPage />} />
        </Routes>
      </Content>
    </Layout>
  </Router>
);

export default App;
