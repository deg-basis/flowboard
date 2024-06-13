import { useEffect, useState } from "react";
import { Typography, Alert, Spin, Table } from "antd";

import { useAirtableContext } from "../context/AirtableContext";
import fetchAirtableData from "../airtable/fetchAirtableData";

const { Title } = Typography;

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
          const result = await fetchAirtableData(
            airtableToken,
            baseId,
            tableName,
          );
          setData(result.records);
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
    return <Spin tip="Loading..." />;
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Company",
      dataIndex: ["fields", "Company"],
      key: "company",
    },
    {
      title: "Created Time",
      dataIndex: "createdTime",
      key: "createdTime",
    },
    {
      title: "Update Record",
      dataIndex: ["fields", "Update Record"],
      key: "updateRecord",
      render: (updateRecord) => (
        <a href={updateRecord.url}>{updateRecord.label}</a>
      ),
    },
  ];

  return (
    <div>
      <Title level={1}>Companies</Title>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
};

export default CompaniesPage;
