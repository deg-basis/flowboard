import { useState, useEffect } from "react";
import { Form, Input, Button, List, Typography, Divider } from "antd";
import { useAirtableContext } from "../context/AirtableContext";
import { useNavigate } from "react-router-dom";
import { urlOf } from "../utils/deploymentUtils";

const { Title } = Typography;

const ConfigPage = () => {
  const { airtableToken, updateAirtableToken } = useAirtableContext();
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setToken(airtableToken || "");
  }, [airtableToken]);

  const handleSubmit = () => {
    updateAirtableToken(token);
    navigate(urlOf("funnel"));
  };

  return (
    <div>
      <Title level={1}>Config</Title>
      <Title level={3}>
        To obtain your Airtable API token, follow these steps:
      </Title>
      <Instructions />
      <Divider />
      <Title level={3}>Enter token now:</Title>
      <Form
        layout="vertical"
        initialValues={{ token: airtableToken }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Airtable Token"
          name="token"
          rules={[
            { required: true, message: "Please input your Airtable token!" },
          ]}
        >
          <Input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={{ width: "700px" }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Token
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const Instructions = () => (
  <div>
    <List
      dataSource={[
        {
          title: "Log in to Airtable:",
          steps: ["Go to Airtable and log in with your credentials."],
        },
        {
          title: "Navigate to the Developer Hub:",
          steps: [
            "Click on your profile picture or initials in the top-right corner of the Airtable interface.",
            "Select “Developer hub” from the dropdown menu.",
          ],
        },
        {
          title: "Generate a Personal Access Token:",
          steps: [
            "In the Developer Hub, find the section for Personal Access Tokens.",
            "Click on “Generate token” or a similar button.",
            "Follow the prompts to create a new Personal Access Token, specifying the scopes and bases you want to grant access to.",
            "Copy the generated token. This is your Personal Access Token.",
          ],
        },
        {
          title: "Save your token here:",
          steps: [
            "Paste the token below.",
            "Click “Save Token”.",
            "Note that this will only save the token locally in your browser.",
          ],
        },
      ]}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            description={
              <List
                dataSource={item.steps}
                renderItem={(step) => <List.Item>{step}</List.Item>}
              />
            }
          />
        </List.Item>
      )}
    />
  </div>
);

export default ConfigPage;
