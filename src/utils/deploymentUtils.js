export const appName = "flowboard";

export const urlOf = (page) => {
  const name = page ? `/${appName}/${page}` : `/${appName}`;
  return name;
};
