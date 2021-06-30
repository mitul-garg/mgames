import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook for using context
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
