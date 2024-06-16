import { Button, Image, Tag } from "antd";

import PropTypes from "prop-types";

const AirtableText = ({ text }) => <span>{text}</span>;
AirtableText.propTypes = {
  text: PropTypes.string.isRequired,
};

export const AirtableRecordId = ({ id, tableName }) => {
  return (
    <Tag color="orange">
      {tableName}: {id}
    </Tag>
  );
};
AirtableRecordId.propTypes = {
  id: PropTypes.string.isRequired,
  tableName: PropTypes.string.isRequired,
};

const AirtableSingleSelect = ({ option }) => {
  return <Tag color="blue">{option}</Tag>;
};
AirtableSingleSelect.propTypes = {
  option: PropTypes.string.isRequired,
};

const AirtableMultiSelect = ({ options }) => {
  return (
    <>
      {options.map((option, index) => (
        <Tag key={index}>{option}</Tag>
      ))}
    </>
  );
};
AirtableMultiSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const AirtableCheckbox = (checked) => <span>{checked ? "Yes" : "No"}</span>;

const AirtableButton = ({ url, label }) => (
  <Button>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  </Button>
);
AirtableButton.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export const AirtableUrl = ({ url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {url}
  </a>
);
AirtableUrl.propTypes = {
  url: PropTypes.string.isRequired,
};

const AirtableImage = ({ attachments }) => {
  const image = attachments?.[0];
  return <Image src={image.url} alt={image.filename} width={"160px"} />;
};
AirtableImage.propTypes = {
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      filename: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export const AirtableField = ({ cellKey, type, value }) => {
  console.log(`Rendering field: key=${cellKey}, type=${type}, value=`, value);
  if (Array.isArray(type)) {
    if (type[0] == "record") {
      return <AirtableRecordId tableName={type[1]} id={value} />;
    } else return "";
  }
  switch (type) {
    case "ignore":
      return "";
    case "URL":
      return <AirtableUrl url={value} />;
    case "button":
      return <AirtableButton url={value?.url} label={value?.label} />;
    case "image":
      return <AirtableImage attachments={value} />;
    case "text":
      return <AirtableText text={value} />;
    case "multilineText":
      return <AirtableText text={value} />;
    case "singleSelect":
      return <AirtableSingleSelect option={value} />;
    case "multipleSelect":
      return <AirtableMultiSelect options={value} />;
    case "checkbox":
      return <AirtableCheckbox checked={value} />;
    default:
      console.error(`Can't handle type {type} for`, value);
      return <span>JSON.stringify(value) </span>;
  }
};

export default AirtableField;
