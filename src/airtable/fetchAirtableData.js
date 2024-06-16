const fetchAirtableData = async (airtableToken, baseId, tableName) => {
  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${tableName}`,
    {
      headers: {
        Authorization: `Bearer ${airtableToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data from Airtable");
  }

  const data = await response.json();
  return data;
};

export default fetchAirtableData;
