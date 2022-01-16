import React, { useState } from 'react';
import { globalState } from './data';

export const GlobalContext = React.createContext();

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [contextState, setState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setState }}>
      {/*eslint-disable-next-line*/}
      {children}
    </GlobalContext.Provider>
  );
};
