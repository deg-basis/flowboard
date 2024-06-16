import { useEffect, useState } from "react";
import { Typography, Alert, Spin, Table } from "antd";

import { useAirtableContext } from "../context/AirtableContext";
import fetchAirtableData from "../airtable/fetchAirtableData";
import AirtableField, {
  AirtableRecordId,
} from "../airtable/renderAirtableFields";

const { Title } = Typography;

const schema = {
  Companies: {
    "Update Record": "button",
    "Primary Contact": ["record", "People"],
    "Home Page": "URL",
    Tagline: "text",
    Crunchbase: "URL",
    "Organization Type": "singleSelect",
    Headquarters: "text",
    Investor: "checkbox",
    Notes: "multilineText",
    Interests: "multipleSelect",
    "BT Invest Status": "singleSelect",
    "Portfolio Logo Permission": "checkbox",
    "Logo URL": "URL",
    Logo: "image",
    "Listed on BasisTech Website": "checkbox",
    Accelerator: "ignore",
    "(legacy) Funnel": "ignore",
    "To Company (for Fillout)": "ignore",
    "Company notes": ["record", "Company notes"],
  },
};

const CompaniesPage = () => {
  const baseId = "appuwUqhc3geVVy1v";
  const tableName = "Companies";
  const { airtableToken } = useAirtableContext();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (airtableToken) {
        try {
          const records = await fetchAirtableData(
            airtableToken,
            baseId,
            tableName,
          );
          setData(records);
        } catch (err) {
          setError(err.message);
        }
      }
    };

    fetchData();
  }, [airtableToken, baseId, tableName]);

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  if (!data) {
    return <Spin />;
  }

  const fieldColumns = Object.keys(schema[tableName])
    .filter((key) => schema[tableName][key] !== "ignore")
    .map((key) => ({
      title: key,
      dataIndex: ["fields", key],
      key: key,
      render: (value) =>
        value ? (
          <AirtableField
            cellKey={key}
            type={schema[tableName][key]}
            value={value}
          />
        ) : (
          () => ""
        ),
    }));
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (value) => <AirtableRecordId tableName="Companies" id={value} />,
    },
    ...fieldColumns,
  ];

  console.log("Columns", columns);

  return (
    <div>
      <Title level={1}>Companies</Title>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
};

export default CompaniesPage;
