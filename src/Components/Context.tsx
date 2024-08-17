import React, { createContext, useState, useContext, ReactNode } from 'react';


interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}


const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);


export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  
  return context;
};


interface DarkModeProviderProps {
  children: ReactNode;
}


export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
