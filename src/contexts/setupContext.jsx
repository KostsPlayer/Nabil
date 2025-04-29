import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const SetupContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
  showLines: true,
  setShowLines: () => {},
});

export const SetupProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showLines, setShowLines] = useState(true);

  return (
    <SetupContext.Provider
      value={{
        darkMode,
        setDarkMode,
        showLines,
        setShowLines,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
};

SetupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSetupContext = () => {
  return useContext(SetupContext);
};
