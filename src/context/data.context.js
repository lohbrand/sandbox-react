import React, { useState } from "react";

const DataContext = React.createContext();

function useData() {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error(`useData must be used within a DataProvider`);
  }
  return context;
}

function DataProvider(props) {
  //const { value: isDarkMode, toggle: toggleDarkMode } = useDarkMode(false);
  // provider data as state
  const [data, setData] = useState();

  // toggler
  const insertData = (incomeData) => setData(incomeData);

  /* const value = React.useMemo(() => [isDarkMode, toggleDarkMode], [
    isDarkMode,
    toggleDarkMode
  ]); */

  return <DataContext.Provider value={data} {...props} />;
}

export { DataProvider, useData };
