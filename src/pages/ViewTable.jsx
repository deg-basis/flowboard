import { useEffect, useState } from "react";
import { Typography, Alert, Spin, Table } from "antd";

import { useAirtableContext } from "../context/AirtableContext";
import fetchAirtableData from "../airtable/fetchAirtableData";
import AirtableField, {
  AirtableRecordId,
} from "../airtable/renderAirtableFields";

const { Title } = Typography;

const schema = {
  People: {
    "First Name": "text",
    "Last Name": "text",
    Email: "email",
    Companies: ["record", "Companies"],
    Role: "text",
    Tags: "multipleSelect",
    LinkedIn: "URL",
    Crunchbase: "URL",
  },
  Companies: {
    Company: "text",
    "Update Record": "button",
    "Primary Contact": ["record", "People"],
    "Home Page": "URL",
    Tagline: "text",
    Crunchbase: "URL",
    "Organization Type": "singleSelect",
    Headquarters: "text",
    Investor: "checkbox",
    Interests: "multipleSelect",
    "BT Invest Status": "singleSelect",
    "Portfolio Logo Permission": "checkbox",
    "Logo URL": "URL",
    Logo: "image",
    "Listed on BasisTech Website": "checkbox",
    Accelerator: "ignore",
    "(legacy) Funnel": "ignore",
    "To Company (for Fillout)": "ignore",
    "Legacy Notes": "multilineText",
    "Company notes": ["record", "Company notes"],
  },
};

const ViewTable = ({ baseId = "appuwUqhc3geVVy1v", tableName }) => {
  const { airtableToken } = useAirtableContext();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 20,
    },
  });
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };
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

  const getSorter = (type, key) => {
    switch (Array.isArray(type) ? type[0] : type) {
      case "text":
      case "multilineText":
      case "URL":
      case "singleSelect":
        return (a, b) => {
          const valA = a.fields[key] || "";
          const valB = b.fields[key] || "";
          return valA.localeCompare(valB);
        };
      case "record":
        return (a, b) => {
          const valA = a.fields[key]?.[0] || "";
          const valB = b.fields[key]?.[0] || "";
          return valA.localeCompare(valB);
        };
      case "checkbox":
        return (a, b) => {
          const valA = a.fields[key] ? 1 : 0;
          const valB = b.fields[key] ? 1 : 0;
          return valA - valB;
        };
      case "button":
      case "image":
      default:
        return null;
    }
  };

  const fieldColumns = Object.keys(schema[tableName])
    .filter((key) => schema[tableName][key] !== "ignore")
    .map((key) => {
      const type = schema[tableName][key];
      return {
        title: key,
        dataIndex: ["fields", key],
        key: key,
        sorter: getSorter(type, key),
        render: (value) =>
          value ? <AirtableField type={type} value={value} /> : () => "",
      };
    });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
      render: (value) => <AirtableRecordId tableName={tableName} id={value} />,
    },
    ...fieldColumns,
  ];

  return (
    <div>
      <Title level={1}>Companies</Title>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        pagination={tableParams.pagination}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default ViewTable;
