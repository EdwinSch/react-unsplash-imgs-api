import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // ---- Global States
  const [items, setItems] = useState(getLocalStorage());

  // ---- Global Functions
  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      task: itemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <AppContext.Provider value={{ items }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
