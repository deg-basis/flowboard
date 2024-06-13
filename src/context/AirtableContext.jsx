import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { obfuscate, deobfuscate } from "../utils/trivialObfuscation";

const AirtableContext = createContext();

/* eslint-disable-next-line react-refresh/only-export-components */
export const useAirtableContext = () => useContext(AirtableContext);

export const AirtableProvider = ({ children }) => {
  const [airtableToken, setAirtableToken] = useState("");
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("airtableToken");
    if (storedToken) {
      setAirtableToken(deobfuscate(storedToken));
    }
    setInitializing(false);
  }, []);

  const updateAirtableToken = (token) => {
    const encodedToken = obfuscate(token);
    setAirtableToken(token);
    localStorage.setItem("airtableToken", encodedToken);
  };

  return (
    <AirtableContext.Provider
      value={{ airtableToken, updateAirtableToken, initializing }}
    >
      {children}
    </AirtableContext.Provider>
  );
};

AirtableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
