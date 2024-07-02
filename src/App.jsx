import { Layout, Menu } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
import {
  AirtableProvider,
  useAirtableContext,
} from "./context/AirtableContext";
import AuthorizedUsersPage from "./pages/AuthorizedUsersPage";
import CompaniesPage from "./pages/CompaniesPage";
import EventsPage from "./pages/EventsPage";
import PeoplePage from "./pages/PeoplePage";
import AddContactPage from "./pages/AddContactPage";
import ConfigPage, {
  lacksCredentialsDefaultPage,
  hasCredentialsDefaultPage,
} from "./pages/ConfigPage";
import HelpPage from "./pages/HelpPage";
import { urlOf } from "./utils/deploymentUtils";

const { Header, Content } = Layout;

const menuItems = [
  {
    key: "views",
    label: "Views",
    children: [
      { key: "people", label: <Link to={urlOf("people")}>People</Link> },
      {
        key: "companies",
        label: <Link to={urlOf("companies")}>Companies</Link>,
      },
      { key: "events", label: <Link to={urlOf("events")}>Events</Link> },
      {
        key: "users",
        label: <Link to={urlOf("users")}>Authorized Users</Link>,
      },
    ],
  },
  {
    key: "add_contact",
    label: <Link to={urlOf("add_contact")}>Add Contact</Link>,
  },
  { key: "config", label: <Link to={urlOf("config")}>Config</Link> },
  { key: "help", label: <Link to={urlOf("help")}>Help</Link> },
];

const AppContent = () => {
  const { airtableToken, initializing } = useAirtableContext();
  const location = useLocation();

  if (initializing) {
    // Avoid double-reload or premature render in React.StrictMode
    return null;
  }

  const basePath = urlOf("").replace(/\/$/, "");
  const relativePath = location.pathname.replace(basePath, "");
  const selectedKey =
    relativePath.split("/")[1] ||
    (airtableToken ? hasCredentialsDefaultPage : lacksCredentialsDefaultPage);

  const isRootPath =
    location.pathname === basePath + "/" || location.pathname === basePath;

  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="header">
        <div className="logo">
          <img
            src={urlOf("BasisTech.png")}
            alt="BasisTech Logo"
            style={{ height: "31px", margin: "16px 24px 16px 0" }}
          />
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={menuItems}
        />
      </Header>
      <Content style={{ marginTop: 64, padding: "0 24px", background: "#fff" }}>
        <Routes>
          {isRootPath && (
            <Route
              path={urlOf("")}
              element={
                <Navigate
                  to={
                    airtableToken
                      ? urlOf(hasCredentialsDefaultPage)
                      : urlOf(lacksCredentialsDefaultPage)
                  }
                />
              }
            />
          )}
          <Route path={urlOf("people")} element={<PeoplePage />} />
          <Route path={urlOf("companies")} element={<CompaniesPage />} />
          <Route path={urlOf("events")} element={<EventsPage />} />
          <Route path={urlOf("users")} element={<AuthorizedUsersPage />} />
          <Route path={urlOf("add_contact")} element={<AddContactPage />} />
          <Route path={urlOf("config")} element={<ConfigPage />} />
          <Route path={urlOf("help")} element={<HelpPage />} />
        </Routes>
      </Content>
    </Layout>
  );
};

const App = () => (
  <AirtableProvider>
    <Router>
      <AppContent />
    </Router>
  </AirtableProvider>
);

export default App;
