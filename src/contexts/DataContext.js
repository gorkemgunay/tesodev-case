import { createContext, useContext, useEffect, useState } from "react";
import _data from "../_data";

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data") || null)
  );

  useEffect(() => {
    const jsonData = _data.data;
    localStorage.setItem("data", JSON.stringify(jsonData));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);

export default DataProvider;
