import { createContext, useState } from "react";
import Data from "../Data/Data";

const DataContext = createContext();

let id = 0;
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(Data[id]);

  const onRightClick = () => {
    id++;
    if (id === Data.length) {
      id = 0;
    }
    setData(Data[id]);
  };

  const onLeftClick = () => {
    id--;
    if (id >= 0 && id < 4) {
      setData(Data[id]);
    } else {
      id = Data.length - 1;
      setData(Data[id]);
    }
  };

  return (
    <DataContext.Provider
      value={{
        Data: data,
        onRightClick,
        onLeftClick,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
