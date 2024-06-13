import React from "react";
import { Layout, Menu } from "antd";
import "./App.css";

const { Header, Content } = Layout;

const menuItems = [
  { key: "1", label: "Events" },
  { key: "2", label: "Funnel" },
  { key: "3", label: "Config" },
  { key: "4", label: "Help" },
];

const App = () => (
  <Layout style={{ height: "100vh" }}>
    <Header className="header">
      <div className="logo">
        <img
          src="/flowboard/BasisTech.png"
          alt="BasisTech Logo"
          style={{ height: "31px", margin: "16px 24px 16px 0" }}
        />
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={["1"]} items={menuItems} />
    </Header>
    <Content style={{ marginTop: 64, padding: "0 24px", background: "#fff" }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at
        lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci
        tincidunt fermentum sit amet ac nulla. Suspendisse potenti. Mauris
        placerat neque et sapien volutpat, ut fringilla ipsum bibendum. Nunc non
        urna vitae est vehicula pellentesque. Vivamus vel metus id arcu
        ullamcorper lacinia a ac mauris. Quisque tempor, ex et tincidunt
        scelerisque, nisl arcu vehicula enim, sit amet varius felis ipsum non
        metus.
      </p>
    </Content>
  </Layout>
);

export default App;
