import React, { createContext, useState, useContext, useEffect } from "react";

const AirtableContext = createContext();

export const useAirtable = () => useContext(AirtableContext);

// Trivial obfuscation.
// [TODO] Good enough, since only on user's local machine?
const encodeToken = (token) => btoa(token);
const decodeToken = (encodedToken) => atob(encodedToken);

export const AirtableProvider = ({ children }) => {
  const [airtableToken, setAirtableToken] = useState("");
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("airtableToken");
    if (storedToken) {
      setAirtableToken(decodeToken(storedToken));
    }
    setInitializing(false);
  }, []);

  const updateAirtableToken = (token) => {
    const encodedToken = encodeToken(token);
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
