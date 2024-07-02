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
    "First Name": { type: "text" },
    "Last Name": { type: "text" },
    Email: { type: "email" },
    Companies: { type: ["record", "Companies"] },
    Role: { type: "text" },
    Tags: { type: "multipleSelect" },
    LinkedIn: { type: "URL", prettyHeading: "LinkedIn URL" },
    Crunchbase: { type: "URL", prettyHeading: "Crunchbase URL" },
  },
  Companies: {
    Name: { type: "text", prettyHeading: "Company Name" },
    "Primary Contact": { type: ["record", "People"] },
    "Home Page": { type: "URL" },
    Tagline: { type: "text" },
    Crunchbase: { type: "URL", prettyHeading: "Crunchbase URL" },
    "Organization Type": { type: "singleSelect" },
    Headquarters: { type: "text" },
    Investor: { type: "checkbox" },
    Interests: { type: "multipleSelect" },
    "BT Invest Status": { type: "singleSelect" },
    "Portfolio Logo Permission": { type: "checkbox" },
    "Logo URL": { type: "URL" },
    Logo: { type: "image" },
    "Listed on BasisTech Website": { type: "checkbox" },
    Accelerator: { type: "ignore" },
    "(legacy) Funnel": { type: "ignore" },
    "To Company (for Fillout)": { type: "ignore" },
    "Legacy Notes": { type: "multilineText" },
    "Company notes": { type: ["record", "Company notes"] },
  },
  Events: {
    Name: { type: "text" },
    Date: { type: "date" },
    Description: { type: "multilineText" },
    Status: { type: "singleSelect" },
    Speakers: { type: ["record", "People"] },
  },
};

const ViewTable = ({ tableName }) => {
  const { getTable } = useAirtableContext();
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
      setData(await getTable({ tableName, setError }));
    };

    fetchData();
  }, [getTable, tableName]);

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
      const type = schema[tableName][key].type;
      const title = schema[tableName][key].prettyHeading || key;
      return {
        title,
        dataIndex: ["fields", key],
        key: key,
        sorter: getSorter(type, key),
        render: (value) =>
          value ? <AirtableField type={type} value={value} /> : "",
      };
    });

  const columns = [
    {
      title: "Update/Actions",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
      render: (value) => <AirtableRecordId tableName={tableName} id={value} />,
    },
    ...fieldColumns,
  ];

  return (
    <div>
      <Title level={1}>{tableName}</Title>
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
