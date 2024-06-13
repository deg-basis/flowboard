import React, { useState } from "react";
import { useAirtable } from "../context/AirtableContext";
import { useNavigate } from "react-router-dom";
import { urlOf } from "../utils/deploymentUtils";

const ConfigPage = () => {
  const { airtableToken, updateAirtableToken } = useAirtable();
  const [token, setToken] = useState(airtableToken || "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAirtableToken(token);
    navigate(urlOf("funnel"));
  };

  return (
    <div>
      <h1>Config</h1>
      <p>Please enter your Airtable API Token below:</p>
      <form onSubmit={handleSubmit}>
        <label>
          Airtable Token:
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={{ marginLeft: "8px", padding: "4px", width: "300px" }}
          />
        </label>
        <button type="submit" style={{ marginLeft: "8px", padding: "4px 8px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConfigPage;
