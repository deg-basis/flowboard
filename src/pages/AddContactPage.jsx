import { useEffect, useState } from "react";
import { Button, Col, Divider, Form, Input, List, Row, Typography } from "antd";

import { useAirtableContext } from "../context/AirtableContext";

const { Title } = Typography;

const AddContactPage = () => {
  const { getTable } = useAirtableContext();
  const [personForm] = Form.useForm();
  const [companyForm] = Form.useForm();

  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (tableName, setter) => {
      setter(await getTable({ tableName, setError }));
    };

    fetchData("People", setPeople);
    fetchData("Companies", setCompanies);
  }, [getTable]);

  useEffect(() => {
    setFilteredPeople(people);
    setFilteredCompanies(companies);
  }, [people, companies]);

  const onPersonSearch = (changedValues, allValues) => {
    const { firstName, lastName, email } = allValues;
    console.log("Searching for person: ", {
      changedValues,
      allValues,
      firstName,
      lastName,
      email,
    });
    const filtered = people.filter((person) => {
      const fields = person.fields;
      return (
        (!firstName ||
          fields["First Name"]
            ?.toLowerCase()
            .includes(firstName.toLowerCase())) &&
        (!lastName ||
          fields["Last Name"]
            ?.toLowerCase()
            .includes(lastName.toLowerCase())) &&
        (!email || fields["Email"]?.toLowerCase().includes(email.toLowerCase()))
      );
    });
    setFilteredPeople(filtered);
  };

  const onCompanySearch = (changedValues, allValues) => {
    const { company } = allValues;
    console.log("Searching for company:", {
      changedValues,
      allValues,
      company,
    });
    const filtered = companies.filter((companyRecord) => {
      const fields = companyRecord.fields;
      return (
        !company ||
        fields["Name"]?.toLowerCase().includes(company.toLowerCase())
      );
    });
    setFilteredCompanies(filtered);
  };

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2}>Add Contact</Title>
      <Divider />

      <Title level={3}>Find Person</Title>
      <Form
        form={personForm}
        name="find_person"
        layout="vertical"
        onValuesChange={onPersonSearch}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="firstName" label="First Name">
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastName" label="Last Name">
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="email" label="Email">
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
        </Row>
        <List
          bordered
          dataSource={filteredPeople}
          style={{ cursor: "pointer", maxHeight: "200px", overflowY: "auto" }}
          renderItem={(person) => (
            <List.Item
              onClick={() =>
                personForm.setFieldsValue({
                  firstName: person.fields["First Name"],
                  lastName: person.fields["Last Name"],
                  email: person.fields["Email"],
                })
              }
            >
              {person.fields["First Name"]} {person.fields["Last Name"]}
            </List.Item>
          )}
        />
      </Form>

      <Divider />
      <Row gutter={16}>
        <Button type="default">Create New Person</Button>
      </Row>
      <Divider />

      <Title level={3}>Find Company</Title>
      <Form
        form={companyForm}
        name="find_company"
        layout="vertical"
        onValuesChange={onCompanySearch}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="company" label="Company">
              <Input placeholder="Company" />
            </Form.Item>
          </Col>
        </Row>
        <List
          bordered
          dataSource={filteredCompanies}
          style={{ cursor: "pointer", maxHeight: "200px", overflowY: "auto" }}
          renderItem={(company) => (
            <List.Item
              onClick={() =>
                companyForm.setFieldsValue({
                  company: company.fields["Name"],
                })
              }
            >
              {company.fields["Name"]}
            </List.Item>
          )}
        />
      </Form>
      <Divider />
      <Row gutter={16}>
        <Button type="default">Create New Company</Button>
      </Row>
    </div>
  );
};

export default AddContactPage;
